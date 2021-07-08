import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import useSiteMetadata from '../../use-site-metadata';
import logo from '../../images/nci-logo-full.svg';

import Banner from '../banner';
import Head from './head';
import Header from '../header/header';
import Footer from '../footer/footer';
import MegaMenu from '../header/mega-menu';

const DefaultLayout = ({ children, pageContext }) => {
	const { title, description } = pageContext.frontmatter;
	const siteMetadata = useSiteMetadata();
	const siteTitle = siteMetadata.title ?? 'NCI Design System';

	return (
		<>
			<Head title={title} description={description} />
			<Link className="usa-skipnav" to="#">
				Skip to main content
			</Link>
			<Banner />
			<Header
				siteTitle={siteTitle}
				siteLink="/"
				siteLogo={logo}
				variant="nci-extended-mega">
				<MegaMenu />
			</Header>
			<div className="usa-overlay" />
			<div className="usa-layout-docs usa-section">
				<div className="grid-container margin-top-4">
					<div className="grid-row grid-gap">
						{/* sidenav && <FieldSideNav navItem={sidenav} /> */}
						<main
							id="main-content"
							className="usa-layout-docs__main desktop:grid-col-12 usa-prose">
							{children}
						</main>
					</div>
				</div>
			</div>
			<Footer
				name="NCI Design System"
				parent="at the National Institute of Health"
				variant="nci-big"
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
