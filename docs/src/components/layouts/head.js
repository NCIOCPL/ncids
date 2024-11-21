import React from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from '../../hooks/use-site-metadata';

// Note, the props for this guy is "location, params, data, pageContext"
export const Head = ({ pageContext }) => {
	const siteMetadata = useSiteMetadata();
	const title = pageContext?.frontmatter?.browser_title
		? `${pageContext.frontmatter.browser_title} - ${siteMetadata.title}`
		: siteMetadata.title;
	const description =
		pageContext?.frontmatter?.meta_description ||
		pageContext?.frontmatter?.page_description ||
		siteMetadata.description;

	return (
		<>
			<html lang="en" />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<script
				data-testid="launch-script"
				src="https://assets.adobedtm.com/6a4249cd0a2c/785de09de161/launch-70d67a6a40a8.min.js"
				async></script>
		</>
	);
};

Head.propTypes = {
	pageContext: PropTypes.object,
};
