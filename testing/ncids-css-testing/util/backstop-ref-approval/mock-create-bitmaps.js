/*
 * This file contains the absolute necessary from
 * backstopjs/core/util/createBitmaps. This file is called by test prior to
 * reports being run. It modifies a config file with state information which
 * is used by the _report chain of commands.
 *
 * At the end of the day, the biggest bit here is that we need a file generated
 * at config.tempCompareConfigFileName that contains all of the test pairs.
 * Most of the logic here is breaking down the config to get filenames that
 * convey which scenario/viewport/selectors were captured. This code could be
 * simplified in the future.
 *
 * A pair basically looks like:
 * {
 *  "pair": {
 *    "reference": "../reference/ncids_usa-tooltip_right_focus_0_document_0_mobile.png",
 *    "test": "../test/base-ref-images/ncids_usa-tooltip_right_focus_0_document_0_mobile.png",
 *    "selector": "document",
 *    "fileName": "ncids_usa-tooltip_right_focus_0_document_0_mobile.png",
 *    "label": "usa-tooltip right focus",
 *    "misMatchThreshold": 0,
 *    "url": "http://host.docker.internal:6006/iframe.html?id=uswds-components-tooltip--default&args=&viewMode=story",
 *    "expect": 0,
 *    "viewportLabel": "mobile",
 *    "diff": {
 *      "isSameDimensions": true,
 *      "dimensionDifference": {
 *        "width": 0,
 *        "height": 0
 *      },
 *      "misMatchPercentage": "0.00"
 *    }
 *  },
 *  "status": "pass"
 * },
 */

const fs = require('fs/promises');
const cloneDeep = require('lodash/cloneDeep');
// Yes the original code imports lodash and cloneDeep separately.
const _ = require('lodash');
const ensureDirectoryPath = require('backstopjs/core/util/ensureDirectoryPath');
const logger = require('backstopjs/core/util/logger')('create-bitmap-function');
const runEngineMock = require('./run-engine-mock');

function ensureViewportLabel (config) {
  if (typeof config.viewports === 'object') {
    config.viewports.forEach(function (viewport) {
      if (!viewport.label) {
        viewport.label = viewport.name;
      }
    });
  }
}

function decorateConfigForCapture (config) {
	const isReference = false;
  let configJSON;

  if (typeof config.args.config === 'object') {
    configJSON = config.args.config;
  } else {
    configJSON = Object.assign({}, require(config.backstopConfigFileName));
  }
  configJSON.scenarios = configJSON.scenarios || [];
  ensureViewportLabel(configJSON);

  const totalScenarioCount = configJSON.scenarios.length;

  function pad (number) {
    let r = String(number);
    if (r.length === 1) {
      r = '0' + r;
    }
    return r;
  }

	// NCI: We are cheating here and hopefully making so we have a standard
	// folder to copy base-branch images to.
  let screenshotDateTime = 'base-ref-images';
  screenshotDateTime = configJSON.dynamicTestId ? configJSON.dynamicTestId : screenshotDateTime;
  configJSON.screenshotDateTime = screenshotDateTime;
  config.screenshotDateTime = screenshotDateTime;

  if (configJSON.dynamicTestId) {
    console.log(`dynamicTestId '${configJSON.dynamicTestId}' found. BackstopJS will run in dynamic-test mode.`);
  }

  configJSON.env = cloneDeep(config);
  configJSON.isReference = isReference;
  configJSON.paths.tempCompareConfigFileName = config.tempCompareConfigFileName;
  configJSON.defaultMisMatchThreshold = config.defaultMisMatchThreshold;
  configJSON.backstopConfigFileName = config.backstopConfigFileName;
  configJSON.defaultRequireSameDimensions = config.defaultRequireSameDimensions;

  if (config.args.filter) {
    const scenarios = [];
    config.args.filter.split(',').forEach(function (filteredTest) {
      configJSON.scenarios.forEach(function (scenario) {
        if (regexTest(scenario.label, filteredTest)) {
          scenarios.push(scenario);
        }
      });
    });
    configJSON.scenarios = scenarios;
  }

  logger.log('Selected ' + configJSON.scenarios.length + ' of ' + totalScenarioCount + ' scenarios.');
  return configJSON;
}

function saveViewportIndexes (viewport, index) {
  return Object.assign({}, viewport, { vIndex: index });
}

function delegateScenarios (config) {
  const scenarios = [];
  const scenarioViews = [];

  config.viewports = config.viewports.map(saveViewportIndexes);

  // casper.each(scenarios, function (casper, scenario, i) {
  config.scenarios.forEach(function (scenario, i) {
    // var scenarioLabelSafe = makeSafe(scenario.label);
    scenario.sIndex = i;
    scenario.selectors = scenario.selectors || [];
    if (scenario.viewports) {
      scenario.viewports = scenario.viewports.map(saveViewportIndexes);
    }
    scenarios.push(scenario);

    if (!config.isReference && _.has(scenario, 'variants')) {
      scenario.variants.forEach(function (variant) {
        // var variantLabelSafe = makeSafe(variant.label);
        variant._parent = scenario;
        scenarios.push(scenario);
      });
    }
  });

  let scenarioViewId = 0;
  scenarios.forEach(function (scenario) {
    let desiredViewportsForScenario = config.viewports;

    if (scenario.viewports && scenario.viewports.length > 0) {
      desiredViewportsForScenario = scenario.viewports;
    }

    desiredViewportsForScenario.forEach(function (viewport) {
      scenarioViews.push({
        scenario,
        viewport,
        config,
        id: scenarioViewId++
      });
    });
  });

  const asyncCaptureLimit = config.asyncCaptureLimit === 0 ? 1 : config.asyncCaptureLimit || CONCURRENCY_DEFAULT;

	// Pretend we execute the page load + screenshot for each scenario+view
	const results = scenarioViews.map(runEngineMock);

	return results;
}

/**
 * This outputs the testpairs config for the compare process. The compare config
 * does not actually look like the backstop config even though it seems that
 * way at first. See flatMapTestPairs below for the actual structure.
 * @param {*} comparePairsFileName
 * @param {*} compareConfig
 * @returns
 */
async function writeCompareConfigFile (comparePairsFileName, compareConfig) {
  const compareConfigJSON = JSON.stringify(compareConfig, null, 2);
  ensureDirectoryPath(comparePairsFileName);
  return fs.writeFile(comparePairsFileName, compareConfigJSON);
}

/**
 * A single scenario + viewport can capture multiple selectors. So backstop maps
 * the scenario view objects, it yields an object with an array of test pairs.
 * Mapping ALL scenario + viewports is an array of these objects. They must be
 * flattened down to a single object with a collection of test pairs.
 * @param {*} rawTestPairs
 * @returns
 */
function flatMapTestPairs (rawTestPairs) {
  return rawTestPairs.reduce((acc, result) => {
    let testPairs = result.testPairs;
    if (!testPairs) {
      testPairs = {
        diff: {
          isSameDimensions: '',
          dimensionDifference: {
            width: '',
            height: ''
          },
          misMatchPercentage: ''
        },
        reference: '',
        test: '',
        selector: '',
        fileName: '',
        label: '',
        scenario: result.scenario,
        viewport: result.viewport,
        msg: result.msg,
        error: result.originalError && result.originalError.name
      };
    }
    return acc.concat(testPairs);
  }, []);
}

module.exports = async function (config) {
	const isReference = false;
	const modifiedConfig = decorateConfigForCapture(config, isReference);
  const rawTestPairs = await delegateScenarios(modifiedConfig);
	const result = {
		compareConfig: {
			testPairs: flatMapTestPairs(rawTestPairs)
		}
	};
	return await writeCompareConfigFile(config.tempCompareConfigFileName, result);
};
