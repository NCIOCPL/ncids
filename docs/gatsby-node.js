const path = require('path');
//const extractExports = require(`gatsby-plugin-mdx/utils/extract-exports`);
//const mdx = require(`gatsby-plugin-mdx/utils/mdx`);
const yaml = require('js-yaml');
const fs = require('fs');

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
			description: String
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
      intro: String
      preview: Boolean
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
			description: String

			## Nav
			title: String
			nav_label: String!
			nav_order: String

			## Common
			template_type: String!

			## Component Page and Utility Page
			page_title: String

			## Component Page
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

const getUswdsVersion = () => {
	const pnpmLock = yaml.load(fs.readFileSync('../pnpm-lock.yaml', 'utf8'));

	const uswdsVersion =
		pnpmLock?.importers['packages/ncids-css']?.devDependencies['@uswds/uswds']
			?.specifier;

	return uswdsVersion !== null ? `v${uswdsVersion}` : 'unknown';
};

// This has been borrowed from https://github.com/primer/doctocat
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	// We need to read the lerna version and the USWDS version from the package.json in
	// gatsby-node.js so we can pass it to the version ribbon component. This is done
	// here because these files need to be read "server-side" and can't be accessed
	// in-browser.
	const lernaJson = require('../lerna.json');
	// Gets the NCIDS verions from the lerna file, which will have a version without 'v'.
	const ncidsVersion = `v${lernaJson.version}`;

	const uswdsVersion = getUswdsVersion();

	const result = await graphql(`
		query {
			allMdx {
				nodes {
					frontmatter {
						browser_title
						description
						title
						nav_label
						nav_order
						template_type
						page_title
						figma_link
						js_doc_link
						usage
						best_practices
						patterns
						accessibility
						overview {
							imgalt
							imgsrc
							whitebg
							intro
							elements {
								description
							}
						}
						variations {
							code
							intro
							outtro
						}
						modifications {
							code
							intro
							outtro
						}
						code_snippets {
							intro
							outtro
							elements {
								title
								intro
								preview
								twig_template_path
								code
								summary
							}
						}
						packages {
							code
							intro
							outtro
						}
						design_tokens {
							heading
							description
							token_info {
								design_token_display_component
								design_token_display_params
							}
							sub_tokens {
								heading
								description
								token_info {
									design_token_display_component
									design_token_display_params
								}
								sub_tokens {
									heading
									description
									token_info {
										design_token_display_component
										design_token_display_params
									}
									sub_tokens {
										heading
										description
										token_info {
											design_token_display_component
											design_token_display_params
										}
									}
								}
							}
						}
						utility_modules {
							name
							utility_module_name
							description
							utility_class_intro
							utility_class_display_component
							utility_class_display_params
							mixins_and_functions {
								intro
								outtro
							}
							supplement
							utility_examples {
								heading
								description
								code
							}
						}
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

		const frontmatter = node.frontmatter;
		const template = layoutTemplates[frontmatter.template_type] ?? layoutTemplates.default;

		createPage({
			path: pagePath,
			component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
			context: {
				pagePath,
				versionInfo: {
					ncidsVersion,
					uswdsVersion,
				},
				tableOfContents: node.tableOfContents,
				// Note: gatsby-plugin-mdx should insert frontmatter
				// for us here, and does on the first build,
				// but when HMR kicks in the frontmatter is lost.
				// The solution is to include it here explicitly.
				frontmatter,
			},
		});
	});
};
