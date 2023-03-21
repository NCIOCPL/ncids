import React from 'react';
import Head from './head';
import PropTypes from 'prop-types';
import Banner from '../banner';
import Header from '../header';
import TopNavigation from '../TopNavigation';
import Navigation from '../Navigation';
import Footer from '../footer/footer';
import useSiteMetadata from '../../use-site-metadata';
import getPostData from '../../get-post-data';

const DefaultLayout = ({ children, pageContext }) => {
	const { title, description } = pageContext.frontmatter;
	const siteMetadata = useSiteMetadata();
	const siteTitle = siteMetadata.title ?? 'NCI Design System';
	const navData = getPostData();
	const pageData = pageContext.frontmatter;

	const result = navData.find((obj) => {
		return obj.section === pageData.section;
	});
	const hasChildren = result.children?.length > 1;
	console.log(result.children);
	return (
		<>
			<Head title={title} description={description} />
			<a className="usa-skipnav" href="#main-content">
				Skip to main content
			</a>
			<Banner />
			<Header siteTitle={siteTitle}>
				{navData && <TopNavigation data={navData} page={pageData} />}
			</Header>
			<div className="usa-overlay" />
			<div className="usa-layout-docs usa-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						{hasChildren && (
							<Navigation data={result.children} page={pageData} />
						)}

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
	}),
	children: PropTypes.node,
};

export default DefaultLayout;
