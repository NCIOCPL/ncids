const path = require('path');
const extractExports = require(`gatsby-plugin-mdx/utils/extract-exports`);
const mdx = require(`gatsby-plugin-mdx/utils/mdx`);

// The following is a hack for USWDS's IE backwards compatibility
// for masked icons and NOT SUPPORTING A WAY TO EITHER TURN IT OFF
// OR SUPPLYING AN ALTERNATE PATH!!!!
// This hack is also required because of Gatsby's
// STUPID AND UNDOCUMENTED FORCING OF THE URL FUNCTION TO CSS-LOADER.
exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
	const config = getConfig();

	// Hack for getting USWDS Icons to work as they are not listed in the
	// module exports.
	if (config.resolve.alias) {
		config.resolve.alias = {
			...config.resolve.alias,
			uswds: path.join(__dirname, '..', 'node_modules/uswds'),
		};
	} else {
		config.resolve.alias = {
			uswds: path.join(__dirname, '..', 'node_modules/uswds'),
		};
	}

	for (const rule of config.module.rules) {
		if (rule.oneOf) {
			// The Sass rules are in a oneOf block
			for (const subRule of rule.oneOf) {
				if (
					String(subRule.test) === String(/\.s(a|c)ss$/) ||
					String(subRule.test) === String(/\.module\.s(a|c)ss$/)
				) {
					// This is a sass rule. Now we need to get the use.
					for (const loaderIdx in subRule.use) {
						const loader = subRule.use[loaderIdx];
						const loaderPath = loader.loader;
						if (
							loaderPath.endsWith(
								'node_modules/gatsby/node_modules/css-loader/dist/cjs.js'
							)
						) {
							loader.options.url = (url) => {
								// When an url starts with /
								if (url.startsWith(`/`)) {
									return false;
								} else if (url.includes('/usa-icons-bg/')) {
									return false;
								}
								return true;
							};
						}
					}
				}
			}
		}
	}
	actions.replaceWebpackConfig(config);
};

// This has been borrowed from https://github.com/primer/doctocat
exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
		{
			allMdx {
				nodes {
					fileAbsolutePath
					rawBody
					tableOfContents(maxDepth: 3)
					parent {
						... on File {
							relativeDirectory
							name
						}
					}
				}
			}
		}
	`);

	// Turn every MDX file into a page.
	return Promise.all(
		data.allMdx.nodes.map(async (node) => {
			const pagePath = path
				.join(
					node.parent.relativeDirectory,
					node.parent.name === 'index' ? '/' : node.parent.name
				)
				.replace(/\\/g, '/'); // Convert Windows backslash paths to forward slash paths: foo\\bar → foo/bar

			// Copied from gatsby-plugin-mdx (https://git.io/JUs3H)
			// as a workaround for https://github.com/gatsbyjs/gatsby/issues/21837
			const code = await mdx(node.rawBody);
			const { frontmatter } = extractExports(code);

			actions.createPage({
				path: pagePath,
				component: node.fileAbsolutePath,
				context: {
					tableOfContents: node.tableOfContents,
					// Note: gatsby-plugin-mdx should insert frontmatter
					// for us here, and does on the first build,
					// but when HMR kicks in the frontmatter is lost.
					// The solution is to include it here explicitly.
					frontmatter,
				},
			});
		})
	);
};
