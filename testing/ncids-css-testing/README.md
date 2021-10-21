# `ncids-css-testing`

> This package contains integration tests so that we can properly check the partials exported from ncids-css.

## Usage
1. Run `yarn start` to run Storybook locally

## Tests
1. Install [Docker Desktop](https://hub.docker.com/search?type=edition&offering=community&architecture=amd64)
2. Ensure Docker Desktop is running
3. Run `yarn backstop:test` to run tests locally with Storybook started
4. OR, run `yarn test:css` to run tests locally if Storybook is not already started (will boot up Storybook using `start-server-and-test` and will close the server once tests are completed)
5. Run `yarn backstop:openReport` to open last test report.

## Create new tests
1. Every test must have an associated Story in [`testing/ncids-css/testing/stories/`](./testing/ncids-css/testing/stories/)
2. For each component, create a new directory using the BEM block name, following rules from [The Way](https://github.com/NCIOCPL/ncids/wiki/The-Way)
3. For each variant, create a new `<variant>.stories.jsx` and optionally `<variant>.scss` files
4. Create a primary story file with its BEM block name containing
   * Default export, defining any custom metadata
   * Exports for all variant stories
   * See an [example](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-support-for-duplicate-kinds) of the primary story file for more information
5. Create a new scenario in [`backstop.config.js`](./testing/ncids-css-testing/backstop.config.js)
   * Include path to component
   * Include any interactions such as on hover or on click
   * Label scenario with `<component> <variant> <interaction>`
6. Run `yarn backstop:test` to test the new scenarios
7. Run `yarn backstop:reference` with Storybook started to create reference files for new scenarios

## Update tests
1. To update existing files, you must run `yarn backstop:approve` with Storybook started

## User Interaction Scripts
BackstopJS ships with scripts that enables several user interaction selectors. These files are located at [`testing/ncids-css-testing/.backstop/engine-scripts/puppet/`](./testing/ncids-css-testing/.backstop/engine-scripts/puppet). Some of the user actions include:

1. [Click and hover](https://github.com/garris/BackstopJS#testing-click-and-hover-interactions)
2. [Key press](https://github.com/garris/BackstopJS#key-press-interactions)
3. [Setting cookies](https://github.com/garris/BackstopJS#setting-cookies)

See [Custom scripts](https://github.com/garris/BackstopJS#running-custom-scripts) to simulate other user actions.

## CI
1. GitHub Actions will automatically run `yarn test:css` for each push and pull request
2. Failed jobs will be uploaded as an artifact for review
   1. Download artifact
   2. Open html-report/index.html
3. Successful jobs will upload the test's `report.json` file

## PRs
1. Be sure to link relevant links in PR for designer approval until this process is automated.

## See also
* [The Way](https://github.com/NCIOCPL/ncids/wiki/The-Way)
* [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
* [BackstopJS](https://github.com/garris/BackstopJS)
* [BackstopJS Docker instructions](https://github.com/garris/BackstopJS#using-docker-for-testing-across-different-environments)
* [`start-server-and-test`](https://github.com/bahmutov/start-server-and-test)

