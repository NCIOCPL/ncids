import React from 'react';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Banner from '../../banner';
import Header from '../../header';
import VersionRibbon from '../../version-ribbon';
import Footer from '../../footer/footer';
import useNavData from '../../../hooks/use-nav-data';
import SideNavigation from '../../navigation/SideNavigation';
import buildNavigationFromMdx from '../../../utils/buildNavigationFromMdx';
import findObjectByKey from '../../../utils/findObjectByKey';
import UtilityPageModuleDisplay from './utility-page-module-display';
import UtilityPageTokenDisplay from './utility-page-token-display';
import MarkdownHeader from '../../markdown-heading';
import { SluggerProvider } from '../../../hooks/slugger';

const Heading2 = MarkdownHeader(2);

// The available props are:
// * location { pathname, search, hash, href, origin}
// * data which is the result of the query exported by this file
// * pageContext which is odd because it has frontmatter, but let's keep data as the place to go to.
// * children which is the rendered content of the MDX file
// * path which should be the path of the page, but in SSG mode it is /*.
const UtilityPageLayout = ({ pageContext, data, children }) => {
	// Get Nav Data from MDX files (hook)
	const navMdxData = useNavData();
	// Build an appropriate object for navigation data consumption
	const navData = buildNavigationFromMdx(navMdxData);

	// Get information from page's frontmatter
	const pagePath = pageContext.navPath;
	// Find where we currently are in the navigation via page's path
	const currentPath = pagePath.split('/').filter((e) => e);
	// Get our current page's navData
	const result = findObjectByKey(navData, 'name', currentPath[0]);
	// Check if current page has children
	// (Example: Components page has a bunch of components as children)
	const hasChildren = result?.children.length > 0;
	const fm = data?.mdx?.frontmatter;

	/**
	 * Helper method to take site root links (e.g., /foo) and prepend the
	 * url with the pathPrefix passed to Gatsby.
	 * @param {string} href the url to update.
	 * @returns fixed URL
	 */

	// Lets make it cleaner to iterate the design tokens.
	const designTokens = Array.isArray(fm.design_tokens) ? fm.design_tokens : [];

	// Lets make it cleaner to iterate the utility modules.
	const utilityModules = Array.isArray(fm.utility_modules)
		? fm.utility_modules
		: [];

	return (
		<>
			<a className="usa-skipnav" href="#main-content">
				Skip to main content
			</a>
			<Banner />
			<VersionRibbon />
			<Header navData={navData} currentPath={currentPath} />
			<div className="usa-overlay" />
			<div className="usa-layout-docs usa-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						{hasChildren && <SideNavigation data={result} path={currentPath} />}
						<main
							id="main-content"
							className={`usa-layout-docs__main desktop:${
								hasChildren ? 'grid-col-9' : 'grid-col-12'
							} usa-prose margin-bottom-4`}>
							<SluggerProvider>
								<h1>{fm.page_title}</h1>

								{/* This is the markdown in the MDX files and for a foundations page may have a lot of content on tokens */}
								{children}

								{/* output token display modules */}
								{designTokens.map((module, idx) => (
									<UtilityPageTokenDisplay key={idx} {...module} />
								))}

								{/* output utility modules */}
								{utilityModules.length > 0 && (
									<Heading2>Utility Modules</Heading2>
								)}
								{utilityModules.map((module, idx) => {
									return <UtilityPageModuleDisplay key={idx} {...module} />;
								})}
							</SluggerProvider>
						</main>
					</div>
				</div>
			</div>
			<Footer
				variant="nci-big"
				accountId="USNIHNCI"
				categoryId="USNIHNCI_C25"
			/>
		</>
	);
};

UtilityPageLayout.propTypes = {
	pageContext: PropTypes.object,
	path: PropTypes.string,
	data: PropTypes.object,
	children: PropTypes.node,
};

// This handles the <head> element.
export { Head } from '../head';

// This is the query used to get the data for the page, the result
// will be passed in as the data prop.
// !!IMPORTANT!!!
// If you are thinking of adding something to this list, you must
// add it to the schema in gatsby-node.js.
export const query = graphql`
	query DefaultTemplate($id: String!) {
		mdx(id: { eq: $id }) {
			frontmatter {
				page_title
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
		}
	}
`;

export default UtilityPageLayout;
