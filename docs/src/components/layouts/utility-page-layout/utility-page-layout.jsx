import React from 'react';

import Head from '../head';
import PropTypes from 'prop-types';
import Banner from '../../banner';
import Header from '../../header';
import Footer from '../../footer/footer';
import useNavData from '../../../hooks/use-nav-data';
import SideNavigation from '../../navigation/SideNavigation';
import buildNavigationFromMdx from '../../../utils/buildNavigationFromMdx';
import findObjectByKey from '../../../utils/findObjectByKey';
import UtilityPageModuleDisplay from './utility-page-module-display';
import UtilityPageTokenDisplay from './utility-page-token-display';
import MarkdownHeader from '../../markdown-heading';

const Heading2 = MarkdownHeader(2);

const UtilityPageLayout = ({ pageContext, children }) => {
	// Get Nav Data from MDX files (hook)
	const navMdxData = useNavData();
	// Build an appropriate object for navigation data consumption
	const navData = buildNavigationFromMdx(navMdxData);

	// Get information from page's frontmatter
	const pagePath = pageContext.pagePath;
	// Find where we currently are in the navigation via page's path
	const currentPath = pagePath.split('/').filter((e) => e);
	// Get our current page's navData
	const result = findObjectByKey(navData, 'name', currentPath[0]);
	// Check if current page has children
	// (Example: Components page has a bunch of components as children)
	const hasChildren = result?.children.length > 0;
	const fm = pageContext.frontmatter;

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
			<Head
				title={pageContext.frontmatter.browser_title}
				description={pageContext.frontmatter.description}
			/>
			<a className="usa-skipnav" href="#main-content">
				Skip to main content
			</a>
			<Banner />
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
							{utilityModules.map((module, idx) => (
								<UtilityPageModuleDisplay key={idx} {...module} />
							))}
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
	frontmatter: PropTypes.object,
	pageContext: PropTypes.shape({
		tableOfContents: PropTypes.object,
		pagePath: PropTypes.string,
		frontmatter: PropTypes.object,
	}),
	children: PropTypes.node,
};

export default UtilityPageLayout;
