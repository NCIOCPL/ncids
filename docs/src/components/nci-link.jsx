// Note this code was borrowed heavily from Gatsby Link documentation
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links
import React from 'react';
import PropType from 'prop-types';

import { Link as GatsbyLink, withPrefix } from 'gatsby';
import { useLocation } from '@reach/router';

const OTHER_DOC_SITES_REGEX = [
	/^\/ncids-js\/?/,
	/^\/example-site\/?/,
	/^\/storybook\/?/,
];

/**
 * NciLink is a wrapper around markdown hyperlinks that handle our unique linking needs.
 * Internal pages should use the Gatsby Link component, while external links need to use
 * the standard <a> tag. However, links to the ncids-js documentation pages, the
 * example site, or Storybook need to be prefaced with the pathPrefix.
 *
 * Gatsby URLs should be full paths to the content. Maybe in a future version we will
 * allow for relative paths, but for now, we need to have the full path.
 *
 * @param {*} param0
 * @returns
 */
const NciLink = ({ href, children, ...other }) => {
	const location = useLocation();

	// If the href has a protocol or it is a anchor fragement, then we
	// use the href as is.
	if (/^[^:]+:/.test(href) || href.startsWith('#')) {
		return (
			<a href={href} {...other} rel="noreferrer">
				{children}
			</a>
		);
		// If this is another doc site, then we need to add the pathPrefix.
	} else if (OTHER_DOC_SITES_REGEX.some((regex) => regex.test(href))) {
		return (
			<a href={withPrefix(href)} {...other} rel="noreferrer">
				{children}
			</a>
		);
	} else {
		// This should be a page on the Gatsby site. Now, we need to make sure
		// it is an ok URL.
		if (!href.startsWith('/')) {
			throw new Error(
				`You must use full paths for internal links. ${href} on page ${location.pathname} is not a full path.`
			);
		}

		// To make our lives more miserable, something in the MDX processing is prefixing paths that are Markdown
		// links with the pathPrefix. `<a>` element in the MDX are NOT messed with. All links in MDX end flowing to
		// this component. All links in FrontmatterMarkdown, e.g., react-markdown are also not prefixed. So we have
		// a mix of links that are prefixed and not prefixed.
		//
		// GatsbyLink will handle prefixing paths, it, unfortunately, is not smart enough to NOT double prefixes
		// paths. I dug around the code for over 30 minutes, probably double that, so I am moving on and just
		// removing the prefix here.
		const prefix = withPrefix('/');

		// The replace function is just an abundance of caution that we only replace prefix matches at the beginning
		// of the string. This way if there is a "develop" page, we do not replace that with a slash when
		// building for the "/develop/"" prefix of the develop branch. I do not look forward to these unit tests...
		const cleanHref = href.startsWith(prefix)
			? href.replace(prefix, (_match, offset) => {
					if (offset === 0) {
						return '/';
					}
			  })
			: href;

		return (
			<GatsbyLink to={cleanHref} {...other}>
				{children}
			</GatsbyLink>
		);
	}
};

NciLink.propTypes = {
	children: PropType.string,
	href: PropType.string,
	other: PropType.array,
};
export default NciLink;
