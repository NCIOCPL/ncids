const path = require('path');

// Setup layout templates.
const layoutTemplates = {
	'components': path.resolve('./src/components/layouts/component-page-layout.jsx'),
	'utility': path.resolve('./src/components/layouts/utility-page-layout/utility-page-layout.jsx'),
	'default': path.resolve('./src/components/layouts/default-layout.jsx')
};

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

		######################
		## These are elements used in <head>
		######################
		interface HeadElements {
      browser_title: String!
			meta_description: String
		}

		######################
		## These are elements used in the navigation
		######################
		interface NavElements {
			title: String
			nav_label: String!
			nav_order: String
		}

		######################
		## These are the fields of a basic page
		######################
		interface CommonPageElements {
			template_type: String!
		}


		##########################################
		## Technically ComponentPageFrontmatter and UtilityPageFrontmatter
		## should be types, but MDX is the actual type of the node, which
		## has frontmatter. If we could separate the MDX types, then we
		## could have a type for each frontmatter type. But we can't do that.
		##########################################

		######################
		## These are the fields of a component page
		######################
		interface ComponentPageFrontmatter {
			page_title: String
			page_description: String
			figma_link: String
			js_doc_link: String
			usage: String
			best_practices: String
			patterns: String
			accessibility: String
			overview: OverviewBlock
			variations: CodeBlock
			modifications: CodeBlock
			code_snippets: CodeSnippets
			packages: CodeBlock
		}

		type OverviewBlock {
      imgalt: String
      imgsrc: String
      whitebg: Boolean
      intro: String
      elements: [CalloutList]
    }

		type CalloutList {
      description: String
    }

    type CodeSnippets {
      intro: String
      outtro: String
      elements: [CodeSnippet]
    }

    type CodeSnippet {
      title: String
			description: String
      intro: String
      preview: Boolean
			init_script: String
      twig_template_path: String
      code: String
      summary: String
		}

    type CodeBlock {
      code: String
      intro: String
      outtro: String
    }

		######################
		## These are the fields and types of a utility page
		######################
		interface UtilityPageFrontmatter {
			page_title: String
			design_tokens: [DesignTokenBlock]
      utility_modules: [UtilityModuleBlock]
		}

		type DesignTokenBlock {
			heading: String
			description: String
			token_info: DesignTokenDisplayBlock
			sub_tokens: [DesignTokenBlock]
		}

		type DesignTokenDisplayBlock {
			design_token_display_component: String
			design_token_display_params: JSON
		}

		type UtilityModuleBlock {
      name: String
			utility_module_name: String!
      description: String
			utility_class_intro: String
			utility_class_display_component: String
			utility_class_display_params: JSON
      mixins_and_functions: UtilityMixinFunctionBlock
      supplement: String
      utility_examples: [UtilityExampleBlock]
    }

		type UtilityMixinFunctionBlock {
      intro: String
      outtro: String
    }

    type UtilityExampleBlock {
      heading: String
      description: String
      code: String
    }

		######################
		## MAIN FRONTMATTER TYPE
		######################
    type ContentFrontmatter implements HeadElements & NavElements & CommonPageElements & ComponentPageFrontmatter & UtilityPageFrontmatter {
			## Head
      browser_title: String!
			meta_description: String

			## Nav
			title: String
			nav_label: String!
			nav_order: String

			## Common
			template_type: String!

			## Component Page and Utility Page
			page_title: String

			## Component Page
			page_description: String
			figma_link: String
			js_doc_link: String
			usage: String
			best_practices: String
			patterns: String
			accessibility: String
			overview: OverviewBlock
			variations: CodeBlock
			modifications: CodeBlock
			code_snippets: CodeSnippets
			packages: CodeBlock

			## Utility Page

			design_tokens: [DesignTokenBlock]
      utility_modules: [UtilityModuleBlock]
    }

  `);
};

// This has been borrowed from https://github.com/primer/doctocat
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	// This query just needs to fetch enough information to determine
	// for each page what the template is, the path, and a unique id
	// for the page query on each template.
	const result = await graphql(`
		query {
			allMdx {
				nodes {
					id
					frontmatter {
						template_type
					}
					internal {
						contentFilePath
					}
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

	if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

	// Create blog post pages.
	const pages = result.data.allMdx.nodes;

	// Turn every MDX file into a page.
	pages.forEach(node => {

		// Node.parent is kind of a misnomer here. node.parent.name is the file
		// name of the page we are working on. So if the page is index.mdx, we
		// need to strip index out of its name. Then we smoosh it up with the
		// directory of the path. The we swap out windows paths if this is being
		// run on a windows machine.
		const pagePath = path
			.join(
				node.parent.relativeDirectory,
				node.parent.name === 'index' ? `/` : `/${node.parent.name}`
			)
			.replace(/\\/g, '/');

		const template = layoutTemplates[node.frontmatter.template_type] ?? layoutTemplates.default;

		createPage({
			path: pagePath,
			component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
			// The following context is passed to the GraphQL query in the template, as well
			// as being available in the page component itself via props.pageContext.
			// Interesting note, frontmatter is magically inserted into the context by
			// something, but let's not trust it because the docs don't say that they
			// just keep saying to query the params. Also, querying makes hot reloading
			// work.
			context: {
				id: node.id,
				// The path going into page templates is weird. In dev move it is correct, but
				// when doing the static generation it is /*. We need a correct path to pass to
				// the nav components, so here it is.
				navPath: pagePath,
			},
		});
	});
};
