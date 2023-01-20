const path = require('path');
const extractExports = require(`gatsby-plugin-mdx/utils/extract-exports`);
const mdx = require(`gatsby-plugin-mdx/utils/mdx`);

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
