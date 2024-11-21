import React from 'react';
import { Script, withPrefix } from 'gatsby';
import { Head } from '../components/layouts/head';
import Banner from '../components/banner';
import Header from '../components/header';
import Footer from '../components/footer/footer';
import useSiteMetadata from '../hooks/use-site-metadata';
import useNavData from '../hooks/use-nav-data';
import buildNavigationFromMdx from '../utils/buildNavigationFromMdx';

const SearchPage = () => {
	const {
		title,
		description,
		siteUrl,
		searchDomain,
		searchEndpoint,
	} = useSiteMetadata();
	const rawNavData = useNavData();
	const navData = buildNavigationFromMdx(rawNavData);

	return (
		<>
			<Head title={title} description={description} />
			<a className="usa-skipnav" href="#main-content">
				Skip to main content
			</a>
			<Banner />
			<Script id="NCI-sws-app-root-js-config" type="text/javascript">
				{(function () {
					// Make gatsby build happy when window doesn't exist
					if (typeof window === 'undefined') {
						global.window = {};
					}

					window.NCI_sws_app_root_js_config = {
						analyticsChannel: 'Search',
						analyticsContentGroup: 'Global Search',
						analyticsPublishedDate: '02/02/2011 - 07:00',
						dropdownOptions: [20, 50],
						searchCollection: 'doc',
						searchSiteFilter: searchDomain,
						searchEndpoint: searchEndpoint,
						siteName: title,
						title: 'Search Results',
						baseHost: siteUrl,
						basePath: withPrefix('/search'),
						canonicalHost: siteUrl,
						language: 'en',
						rootId: 'NCI-sws-app-root',
					};
				})()}
			</Script>
			<Script
				id="NCI-sws-app-root-js-file"
				src="https://www.cancer.gov/app-modules/sitewide-search-app/sitewide-search-app.v1.4.0/static/js/main.js"
				type="text/javascript"
				onload="window.SitewideSearchApp(window.NCI_sws_app_root_js_config)"
				async></Script>
			<Header navData={navData} currentPath={[]} />
			<div className="usa-overlay" />
			<div className="usa-layout-docs usa-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						<main
							id="main-content"
							className={`usa-prose usa-layout-docs__main desktop:grid-col-12 usa-prose margin-bottom-4`}>
							<div id="NCI-sws-app-root"></div>
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

SearchPage.propTypes = {};

export default SearchPage;
