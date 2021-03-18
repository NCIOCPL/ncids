import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import useSiteMetadata from '../../use-site-metadata';

const Head = (props) => {
	const siteMetadata = useSiteMetadata();
	const title = props.title
		? `${props.title} | ${siteMetadata.title}`
		: siteMetadata.title;
	const description = props.description || siteMetadata.description;

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
		</Helmet>
	);
};

Head.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default Head;
