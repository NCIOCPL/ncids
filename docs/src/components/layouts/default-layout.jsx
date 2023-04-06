import React from 'react';
import Head from './head';
import PropTypes from 'prop-types';
import Banner from '../banner';
import Header from '../header';
import Footer from '../footer/footer';
import useNavData from '../../hooks/use-nav-data';
import SideNavigation from '../navigation/SideNavigation';
import buildNavigationFromMdx from '../../utils/buildNavigationFromMdx';
import findObjectByKey from '../../utils/findObjectByKey';

// These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.
const getGlobalPathPrefix = () => {
	const pathPrefix =
		process.env.NODE_ENV !== 'production'
			? typeof __PATH_PREFIX__ !== 'undefined'
				? __PATH_PREFIX__
				: undefined
			: __PATH_PREFIX__;
	return typeof pathPrefix !== 'undefined' ? pathPrefix : '';
};

const DefaultLayout = ({ children, pageContext }) => {
	// Get Nav Data from MDX files (hook)
	const navMdxData = useNavData();
	// Build an appropriate object for navigation data consumption
	const navData = buildNavigationFromMdx(navMdxData);

	// Get information from page's frontmatter
	const { title, description } = pageContext.frontmatter;
	const pagePath = pageContext.pagePath;
	const pageLocation = pagePath.replace(getGlobalPathPrefix(), '');

	// Find where we currently are in the navigation via page's path
	const currentPath = pageLocation.split('/').filter((e) => e);
	// Get our current page's navData
	const result = findObjectByKey(navData, 'name', currentPath[0]);
	// Check if current page has children
	// (Example: Components page has a bunch of components as children)
	const hasChildren = result?.children.length > 0;

	return (
		<>
			<Head title={title} description={description} />
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
							{children}
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

DefaultLayout.propTypes = {
	pageContext: PropTypes.shape({
		tableOfContents: PropTypes.object,
		frontmatter: PropTypes.object,
		pagePath: PropTypes.string,
	}),
	children: PropTypes.node,
};

export default DefaultLayout;
