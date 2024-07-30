import React, { useState } from 'react';
import { withPrefix } from 'gatsby';
import Head from '../components/layouts/head';
import Banner from '../components/banner';
import Header from '../components/header';
import Footer from '../components/footer/footer';
import useSiteMetadata from '../hooks/use-site-metadata';
import useNavData from '../hooks/use-nav-data';
import buildNavigationFromMdx from '../utils/buildNavigationFromMdx';

import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

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

	// Hack to get around issue with rehydration for local development
	const [
		searchAppHackForRehydration,
		setSearchAppHackForRehydration,
	] = useState();

	useEffect(() => {
		if (searchAppHackForRehydration === undefined) {
			setSearchAppHackForRehydration(true);
		}
	}, [searchAppHackForRehydration]);

	return (
		<>
			<Head title={title} description={description} />
			<Helmet htmlAttributes={{ lang: 'en' }}>
				<script
					type="text/javascript"
					src="https://www.cancer.gov/app-modules/sitewide-search-app/sitewide-search-app.v1.4.0/static/js/main.js"></script>
			</Helmet>
			<a className="usa-skipnav" href="#main-content">
				Skip to main content
			</a>
			<Banner />
			<Header navData={navData} currentPath={[]} />
			<div className="usa-overlay" />
			<div className="usa-layout-docs usa-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						<main
							id="main-content"
							className={`usa-prose usa-layout-docs__main desktop:grid-col-12 usa-prose margin-bottom-4`}>
							{searchAppHackForRehydration && (
								<nci-sitewide-search
									title={title}
									searchSiteFilter={searchDomain}
									searchEndpoint={searchEndpoint}
									baseHost={siteUrl}
									basePath={withPrefix('/search')}
									canonicalHost={siteUrl}
								/>
							)}
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
