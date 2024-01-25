const path = require('path');
const extractExports = require(`gatsby-plugin-mdx/utils/extract-exports`);
const mdx = require(`gatsby-plugin-mdx/utils/mdx`);

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		module: {
			rules: [
				{
					test: /.twig$/,
					use: 'twigjs-loader',
				},
			],
		},
	});
};

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
	createTypes(`
    type Mdx implements Node {
      frontmatter: ContentFrontmatter
    }

    type  ContentFrontmatter {
      browser_title: String!
      page_title: String
			nav_label: String!
      nav_order: String
      template_type: String

			description: String
      figma_link: String

      overview: OverviewBlock
      variations: CodeBlock
      modifications: CodeBlock

      usage: String
			best_practices: String
      patterns: String
			accessibility: String

      code_snippets: SnippetBlock
      packages: SnippetBlock
      updates: [UpdateRow]
    }

    type SnippetBlock {
      intro: String
      outtro: String
      elements: [CodeSnippet]
    }

    type CodeSnippet {
      title: String
      intro: String
      preview: Boolean
      twig_template_path: String
      code: String
      summary: String
    }

    type OverviewBlock {
      imgalt: String
      imgsrc: String
      whitebg: Boolean
      intro: String
      elements: [CalloutList]
    }

    type CalloutList {
      desctiption: String
    }

    type CodeBlock {
      code: String
      intro: String
      outtro: String
    }
    type UpdateRow {
      date: Date!
      affects: String!
      version: String!
      description: String!
    }
  `);
};

// This has been borrowed from https://github.com/primer/doctocat
exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
		{
			allMdx {
				nodes {
					frontmatter {
						accessibility
						best_practices
						browser_title
						code_snippets {
							elements {
								code
								intro
								summary
								title
								preview
								twig_template_path
							}
							intro
							outtro
						}
						description
						figma_link
						modifications {
							code
							intro
							outtro
						}
						nav_label
						nav_order
						overview {
							imgalt
							imgsrc
							intro
							whitebg
						}
						page_title
						patterns
						template_type
						title
						updates {
							affects
							date
							description
							version
						}
						usage
						packages {
							intro
							code
							outtro
						}
						variations {
							code
							intro
							outtro
						}
					}
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
			const templateType =
				node.frontmatter.template_type === 'components' ? '/components' : '';

			const pathPrefix =
				node.parent.name === 'index'
					? `${templateType}/`
					: `${templateType}/${node.parent.name}`;

			// Convert Windows backslash paths to forward slash paths: foo\\bar → foo/bar
			const pagePath = path
				.join(node.parent.relativeDirectory, pathPrefix)
				.replace(/\\/g, '/');

			// Copied from gatsby-plugin-mdx (https://git.io/JUs3H)
			// as a workaround for https://github.com/gatsbyjs/gatsby/issues/21837
			const code = await mdx(node.rawBody);
			const { frontmatter } = extractExports(code);
			actions.createPage({
				path: pagePath,
				component: node.fileAbsolutePath,
				context: {
					pagePath,
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
