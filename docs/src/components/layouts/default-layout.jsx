import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../banner';
import Header from '../header';
import VersionRibbon from '../version-ribbon';
import Footer from '../footer/footer';
import useNavData from '../../hooks/use-nav-data';
import SideNavigation from '../navigation/SideNavigation';
import buildNavigationFromMdx from '../../utils/buildNavigationFromMdx';
import findObjectByKey from '../../utils/findObjectByKey';
import { SluggerProvider } from '../../hooks/slugger';

// The available props are:
// * location { pathname, search, hash, href, origin}
// * data which is the result of the query exported by this file
// * pageContext which is odd because it has frontmatter, but let's keep data as the place to go to.
// * children which is the rendered content of the MDX file
// * path which should be the path of the page, but in SSG mode it is /*.
const DefaultLayout = ({ pageContext, children }) => {
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
							className={`usa-prose usa-layout-docs__main desktop:${
								hasChildren ? 'grid-col-9' : 'grid-col-12'
							} usa-prose margin-bottom-4`}>
							<SluggerProvider>{children}</SluggerProvider>
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
	pageContext: PropTypes.object,
	path: PropTypes.string,
	children: PropTypes.node,
};

// This handles the <head> element.
export { Head } from './head';

export default DefaultLayout;
