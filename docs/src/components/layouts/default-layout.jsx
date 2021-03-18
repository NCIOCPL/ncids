import React from 'react';
import Head from './head';
import PropTypes from 'prop-types';
import Banner from '../banner';
import Header from '../header';
import TmpNav from '../tmp-nav';
import Footer from '../footer';
import useSiteMetadata from '../../use-site-metadata';

const DefaultLayout = ({ children, pageContext }) => {
	const { title, description } = pageContext.frontmatter;
	const siteMetadata = useSiteMetadata();
	const siteTitle = siteMetadata.title ?? 'NCI Design System';

	return (
		<>
			<Head title={title} description={description} />
			<a className="usa-skipnav" href="#main-content">
				Skip to main content
			</a>
			<Banner />
			<Header siteTitle={siteTitle}>
				<TmpNav />
			</Header>
			<div className="usa-overlay" />
			<div className="usa-layout-docs usa-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						{/* sidenav && <FieldSideNav navItem={sidenav} /> */}
						<main
							id="main-content"
							className="usa-layout-docs__main desktop:grid-col-9 usa-prose">
							{children}
						</main>
					</div>
				</div>
			</div>
			<Footer />
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
