
const path = require("path");
const {
	defaultJoin,
	createJoinForPredicate
} = require('resolve-url-loader/lib/join-function');
const fs       = require('fs');
const compose  = require('compose-function');

// We know that uswds is downloaded to <repo_root>/node_modules/uswds for this ncids repo.
// This is brittle if this ever moves, but I don't care enough right now to code up a bunch
// of includePaths like we have to do for the sass-loader.
const uswdsLocation = path.join(__dirname, '../../../node_modules/uswds');
const uswdsImageBase = path.join(uswdsLocation, '/dist/img');

// USWDS does not store images with the sass, but uses relative paths.
// This is a bit of an issue in order for any packager to determine
// where to get the image from. (for base64 encoding, copying, sprite
// making, etc)
//
// However, there is a hacky bit of logic we can leverage with the
// resolve-url-loader. This loader rewrites the urls() from a generated
// sass file to be the path relative to whatever is being built, e.g.
// the entry point sass. Additionally, even though the relative paths
// in the USWDS Sass would not be correct, all icon references go
// through node_modules/uswds/dist/scss/core/mixins.
//
// So we can setup a join function for resolve-url-loader to setup the
// correct path for any images that were referenced by the image mixins.
//
// Note: this crap is all complicated.

const simpleJoin = compose(path.normalize, path.join);

/**
 * This is a join function that can fix the image paths of uswds URIs. Right now this
 * only knows about images in uswds, not how to reference ncids-css. This is bascially
 * a modified copy of resolve-url-loader's defaultJoin. (I could not figure out how to
 * chain predicates in v3 so we have this copy.)
 *
 * @param {string} fileName the sass file that is the "entry point" to the loader calls
 * @param {string} uri the uri of the url() call in the generated css
 * @param {string|Iterator.<string>} base the directory of the sass partial that generated the url() call.
 * @param {*} i
 * @param {*} next
 * @returns
 */
const uswdsJoinPredicate = 	(fileName, uri, base, i, next) => {
	/* An example call to this would be something like:
	   fileName: <repo_root>/testing/ncids-css-testing/stories/components/usa-footer/nci-big.scss
     uri: ../img/usa-icons/facebook.svg
     base: <repo_root>/node_modules/uswds/dist/scss/core/mixins
	*/

	// This is the default value of the theme-base variable that determines the base path.
	const defaultThemeBase = '../img';

	// We can assume any uri starting with '../img' is a uswds image and should actually
	// come from uswds images, otherwise we fallback to the default logic.
	const absolute = (uri.startsWith(defaultThemeBase)) ?
		simpleJoin(uswdsImageBase, uri.replace(defaultThemeBase, '')) :
		simpleJoin(base, uri);

	return fs.existsSync(absolute) ? absolute : next((i === 0) ? absolute : null);
};

/**
 * Storybook/webpack sets up a default rule for how to handle image files. We would like
 * to just inline the image files into the css using url-loader instead of having to make
 * a static folder, configure webpack/storybook to serve that folder, and have to add a
 * file copier plugin to webpack in order to get the files from USWDS to that static folder.
 */
const replaceDefaultImageRulesForUswds = (config) => {
	for (const rule of config.module.rules) {
		// Each webpack rule's test is a regex. So we check to see if the rule would
		// match a test image in uswds, if so exclude that rule.
		if (
			rule.test.test(path.join(uswdsImageBase, 'test.svg')) ||
			rule.test.test(path.join(uswdsImageBase, 'test.png'))
		) {
			// Add uswds as an exclude.
			if (rule.exclude) {
				rule.exclude.push(uswdsImageBase)
			} else {
				rule.exclude = [ uswdsImageBase ];
			}
		}
	}

	// Now create our rule for handling images.
	config.module.rules.push({
		test: /\.(svg|png)$/,
		use: ['url-loader'],
		include: [uswdsImageBase]
	});
}

const addRuleForSassToString = (config) => {
		// Add rendering of sass files to CSS strings for our storybook testing.
		// This config will allow you to do `import css from './yourfile.scss';`
		// and css will be a string. THIS IS ONLY FOR THE COMPONENTS FOLDER.
    config.module.rules.push({
      test: /\.scss$/,
      use: [
				// This gets the output from the extract loader as a string. NOTE: newer
				// css-loaders allow you to setup the extractType to be just a string, but
				// we don't have it so deal with this.
				"raw-loader",
				// This knows how to get the css out from the "javascript" the css-loader
				// returns. (Loaders only return javascript modules)
				"extract-loader",
				// This takes the css output from sass and fiddles with it.
				{
					loader: "css-loader",
					options: {
						url: true,
					}
				},
				// This is required to add vendor prefixes to stuff like mask styles. See
				// postcss.config.js to see the postcss plugins and browserslist in the
				// package.json for supported browsers.
				'postcss-loader',
				// Since the sass will have relative urls that are based on the original
				// file, we need to rewrite them so the css-loader can find them.
				{
					loader: "resolve-url-loader",
					options: {
						// This is what looks at the url paths for images and rewrites it to
						// a uswds path if the image is in uswds.
						join: createJoinForPredicate(uswdsJoinPredicate, 'uswdsJoinHack'),
					}
				},
				// This processes the sass file that is being handled by this test.
				{
					loader: "sass-loader",
					options: {
						// sourceMap is required by resolve-url-loader to know what sass referenced
						// a url().
						sourceMap: true,
						sassOptions: {
							quietDeps: true,
							includePaths: [
								path.join(__dirname, 'node_modules'),
								path.join(__dirname, '..', '..', 'node_modules'),
							]
						}
					}
				}
			],
			include: path.resolve(__dirname, "../stories/components"),
    });
    config.resolve.extensions.push(".scss");

}

module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	webpackFinal: async (config, { configType }) => {

		replaceDefaultImageRulesForUswds(config);
		addRuleForSassToString(config);

    config.stats = "verbose";

    return config;
  },
};
