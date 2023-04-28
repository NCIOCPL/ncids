// This is actually executed at transpile time, not at runtime. This sets up
// a webpack context that allows us to load up the templates from ncids-twig.
const context = require.context(
	// The path to load files.
	'@nciocpl/ncids-twig',
	// We should use sub directories.
	true,
	// The regex of file names to match.
	/\.twig$/
);

// Generates a map of template names to template "code". The templates would
// begin with './' so we will strip this so we can use things like:
// 'components/usa-banner/usa-banner.twig' for paths.
const templates = context.keys().reduce(
	(ac, key) => ({
		...ac,
		[key.replace('./', '')]: context(key),
	}),
	{}
);

/**
 * Gets a twig template from ncids-twig library.
 *
 * @param {string} templateName template name.
 * @returns the loaded twig template.
 */
const getTwigTemplate = (templateName) => {
	return templates[templateName];
};

export default getTwigTemplate;
