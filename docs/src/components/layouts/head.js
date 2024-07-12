import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import useSiteMetadata from '../../hooks/use-site-metadata';

const Head = (props) => {
	const siteMetadata = useSiteMetadata();
	const title = props.title
		? `${props.title} | ${siteMetadata.title}`
		: siteMetadata.title;
	const description = props.description || siteMetadata.description;

	return (
		<Helmet htmlAttributes={{ lang: 'en' }}>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<script
				data-testid="launch-script"
				src="https://assets.adobedtm.com/6a4249cd0a2c/785de09de161/launch-70d67a6a40a8.min.js"
				async></script>
		</Helmet>
	);
};

Head.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default Head;
