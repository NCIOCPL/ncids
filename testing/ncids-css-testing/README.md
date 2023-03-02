# `ncids-css-testing`

> This package contains integration tests so that we can properly check the partials exported from ncids-css.

## Usage
1. Run `yarn start` to run Storybook locally

## Tests
1. Install [Docker Desktop](https://hub.docker.com/search?type=edition&offering=community&architecture=amd64)
2. Ensure Docker Desktop is running
3. Open a command prompt
4. cd into the `testing/ncids-css-testing` folder
5. Run `yarn start` to start the Storybook server
6. Run `yarn backstop:test` to run tests locally with Storybook started
7. Run `yarn backstop:openReport` to open last test report.
8. Stop the Storybook server when finished.

## Create new tests
1. Every test must have an associated Story in [`testing/ncids-css/testing/stories/`](./testing/ncids-css/testing/stories/)
2. For each component, create a new directory using the BEM block name, following rules from [The Way](https://github.com/NCIOCPL/ncids/wiki/The-Way)
3. For each variant, create a new `<variant>.stories.jsx` and optionally `<variant>.scss` files
4. Create a primary story file with its BEM block name containing
   * Default export, defining any custom metadata
   * Exports for all variant stories
   * See an [example](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-support-for-duplicate-kinds) of the primary story file for more information
5. Create a new scenario file, or add to an existing one, in `stories/components/<your-component>/<your-component>.scenarios.js`
   * In each scenario add the following:
	   * `storyId` - the storybook Id. This will be used to build the URL
     * `label` - Label scenario with `<component> <variant> <interaction>`
		 * any additional backstopjs options for a test (e.g. selectors)
6. Run `yarn backstop:test` to test the new scenarios
7. Run `yarn backstop:reference` with Storybook started to create reference files for new scenarios

## Setting up stories for new USWDS native components
These are components we are not addressing yet and need to republish, which are the components under `ncids-css/uswds-packages`. The idea behind these components is that they are being republished as-is, but do need to be "acceptable" within our theme settings and do need regression tests.

Additionally, the folder structure should parallel the USWDS structure under their `packages` folder. This helps with identifying changed when upgrading to new versions of the USWDS.

For the purposes of this content the word `package` refers to a folder under `uswds/packages`, `component` refers to a package that starts with `usa-`, i.e. a USWDS component. We do not see stories for packages starting with `uswds-`, but this could change in the future.

Copying the USWDS stories over are not exactly the same, but here are some rough steps.
1. Create a folder under `stories/uswds-native` with the same name as the component under `uswds/packages`.
2. Add an empty src folder.
3. Copy over the `src/content` folder if it exists. This is usually JSON that gets bound with the twig template to make the html.
4. Copy over all `src/**/*.twig` files, **maintaining any folder structures**
5. Copy over all `src/**/*.stories.js` files. Stories.js files are not only direct decendants of `src`
6. Create an `index.scss` file in the `src` folder with:
   ```
	 @use "styles/ncids";
   @forward "<COMPONENT_NAME_HERE>";
	 ```
7. Edit each `*.stories.js` file to do the following, understanding these are things that differ the most.
   1. Add the following before any imports
	    ```
			import React from 'react';
      import { TestCase } from '../../../../components/test-case';
			```
   2. Add the following after all the imports
	    ```
			import css from './index.scss';
			```
	 3. Modify the title of the `export default {` to start with `USWDS/`.
	 4. Modify any story exports to use our `<TestCase>` component. Story exports look like `export const Default = Template.bind({});`. Where in this example `Default` is the "Story" and `Template.bind({})` is the "Template Function". The "Template Function" is a function that optionally takes a JS object and returns an HTML string.
	    1. Replace `export const <Story> = <Template Function>;` with `export const <Story> = () => <TestCase css={css} html={<Template Function>()} />;`
			   * Example `export const Default = Template.bind({});` becomes `export const Default = () => <TestCase css={css} html={Template.bind({})()} />;`
				 * **NOTE:** That "Template Function" *IS* a function and *we* need to run it to get the HTML string.
				 * **NOTE:** A single `*.stories.js` file *can* contain multiple twig templates, so keep that in mind when copy/pasting. These seem to always be named `XxxTemplate`.
			2. Change how the content is passed to the template. This takes the form of 2 approaches:
				 * An `args` property set on the "Story". (E.g., `Default.args = DefaultContent;`)
				   1. You just need to pass the `YyyContent` variable onto the "Template Function". e.g., `export const Default = () => <TestCase css={css} html={Template.bind({})(DefaultContent)} />;`
					 2. Remove the `.args` property.
				 * An `argsType` property. This defines the shape of the object, and the knobs and dials. You need to pass an object to the "Template Function" that matches the shape using the default values.
				   1. Change:
					    ```
						  Default.args = {
                restrictedDateStart: {
                  defaultValue: "1995-03-06",
                },
                restrictedDateEnd: {
                  defaultValue: "1995-03-15",
                },
                defaultDateStart: {
                  table: { disable: true },
                },
                defaultDateEnd: {
                  table: { disable: true },
                },
              }
						  ```
              To be:
					    ```
						  export const Default = () => <TestCase css={css} html={Template.bind({})(
							  {
								  restrictedDateStart: "1995-03-06",
								  restrictedDateEnd: "1995-03-15"
							  }
						  )} />;
						  ```
 	         2. Remove the `<story>.argsType`
	 5. I would say, leave in the knobs and dials definition in the `export default` section.
   6. Preview the component and add any additional needed imports. The USWDS component package's index.scss only contain what is necessary to show the component. Many times the examples include multiple pieces to show off the components. (This could be that most of the items we are exporting are form pieces)

>**_One final note,_** some of the twig templates reference shared templates or other components. We found during the implementation that they sometimes reference components we have excluded or we did not copy twig for as we have "taken ownership." In some of these cases you might need to tweak things.

### USWDS Templates
A number of stories use templates from the `uswds\packages\templates`, as well as having stories in that folder. We do not plan on using the stories, but we do want to keep some of the templates. As such, we need to change out the component templates they are using, specifically with usa-base/includes. This means we need our own versions of those templates. These templates will be stored in `testing/shared/templates`. These templates, and in the future, content, can be shared between ncids-js-testing and ncids-css-testing as well.

## Update tests
1. Open a command prompt
2. cd into the `testing/ncids-css-testing` folder
3. Run `yarn start` to start the Storybook server
4. To update existing files, you must run `yarn backstop:approve` with Storybook started
5. Review the list of files generated to ensure that it **ONLY** has modified those you expected.
6. Run `yarn backstop:test` to ensure that the all tests pass.
7. Stop your Storybook server and commit your changes

## WSL
1. For WSL, preface all `yarn backstop:` commands with `CI=true`
    - e.g. `CI=true yarn backstop:reference`

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

