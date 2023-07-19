/*
 * This file was created based on runPuppet and simulates the object that would
 * be returned by runPuppet.
 */
const _ = require('lodash');
const engineTools = require('backstopjs/core/util/engineTools');

const DEFAULT_FILENAME_TEMPLATE = '{configId}_{scenarioLabel}_{selectorIndex}_{selectorLabel}_{viewportIndex}_{viewportLabel}';
const DEFAULT_BITMAPS_TEST_DIR = 'bitmaps_test';
const DEFAULT_BITMAPS_REFERENCE_DIR = 'bitmaps_reference';

/**
 * This mocks the results of mapping scenarioViews to either runPlaywrite or
 * runPuppet.
 * @param {Object} args The scenario view
 * @return A test pair, I think?
 */
function runEngineMock(args) {
  const scenario = args.scenario;
  const viewport = args.viewport;
  const config = args.config;
  const scenarioLabelSafe = engineTools.makeSafe(scenario.label);
  const variantOrScenarioLabelSafe = scenario._parent ? engineTools.makeSafe(scenario._parent.label) : scenarioLabelSafe;

  config._bitmapsTestPath = config.paths.bitmaps_test || DEFAULT_BITMAPS_TEST_DIR;
  config._bitmapsReferencePath = config.paths.bitmaps_reference || DEFAULT_BITMAPS_REFERENCE_DIR;
  config._fileNameTemplate = config.fileNameTemplate || DEFAULT_FILENAME_TEMPLATE;
  config._outputFileFormatSuffix = '.' + ((config.outputFormat && config.outputFormat.match(/jpg|jpeg/)) || 'png');
  config._configId = config.id || engineTools.genHash(config.backstopConfigFileName);

	// Our scenarios should not have selectors, and thus default to document.
	// If this changes we should hard error out.
	if (_.has(scenario, 'selectors') && scenario.selectors.length > 0) {
		throw new Error(`${scenarioLabelSafe}:${variantOrScenarioLabelSafe} defines selectors (${scenario.selectors}) and is not supported!`);
	}

	if (!config.paths) {
    config.paths = {};
  }

	if (typeof viewport.label !== 'string') {
    viewport.label = viewport.name || '';
  }

	const compareConfig = { testPairs: [
		engineTools.generateTestPair(
			config,
			scenario,
			viewport,
			variantOrScenarioLabelSafe,
			scenarioLabelSafe,
			0,
			'document')
	] };

	return compareConfig;
}

module.exports = runEngineMock;
