import { useStaticQuery, graphql } from 'gatsby';

function useSiteMetadata() {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					shortName
					description
					imageUrl
					siteUrl
					searchDomain
					searchEndpoint
					versionInfo {
						ncidsVersion
						uswdsVersion
					}
				}
			}
		}
	`);
	return data.site.siteMetadata;
}

export default useSiteMetadata;
