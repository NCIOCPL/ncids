const path = require('path');
//const extractExports = require(`gatsby-plugin-mdx/utils/extract-exports`);
//const mdx = require(`gatsby-plugin-mdx/utils/mdx`);
const yaml = require('js-yaml');
const fs = require('fs');

// Setup layout templates.
const layoutTemplates = {
	'component': path.resolve('./src/components/layouts/component-page-layout.jsx'),
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

    type ContentFrontmatter {
			title: String
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

			design_tokens: [DesignTokenBlock]
      utility_modules: [UtilityModuleBlock]
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
      description: String
    }

    type CodeBlock {
      code: String
      intro: String
      outtro: String
    }

    type UtilityModuleBlock {
      name: String
      description: String
      utility_class_info: UtilityInfoBlock
			utility_module_name: String
			utility_class_display_component: String
			utility_class_display_params: JSON
      mixins_and_functions: MixinFunctionBlock
      tokens_and_utilities: TokenUtilityBlock
      supplement: String
      utility_examples: [UtilityExampleBlock]
    }

		type DesignTokenBlock {
			name: String
			design_token_component_name: String
		}

    type MixinFunctionBlock {
      intro: String
      outtro: String
    }

    type TokenUtilityBlock {
      intro: String
      outtro: String
    }

    type UtilityInfoBlock {
      uswds_utility_module_name: String
      is_responsive_enabled: String
      state_modifiers: String
      gzip_size: String
      uncompressed_size: String
    }

    type UtilityExampleBlock {
      heading: String
      description: String
      code: String
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
						design_tokens {
							name
							design_token_component_name
						}
						utility_modules {
							name
							description
							utility_module_name
							utility_class_display_component
							utility_class_display_params
							utility_class_info {
								uswds_utility_module_name
								is_responsive_enabled
								state_modifiers
								gzip_size
								uncompressed_size
							}
							mixins_and_functions {
								intro
								outtro
							}
							tokens_and_utilities {
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
