import { useStaticQuery, graphql } from 'gatsby';

const useNavData = () => {
	const data = useStaticQuery(graphql`
		query {
			allMdx(sort: { fields: fileAbsolutePath, order: ASC }) {
				totalCount
				edges {
					node {
						frontmatter {
							title
							nav_label
							nav_order
						}
						fileAbsolutePath
					}
				}
			}
		}
	`);
	return data;
};

export default useNavData;
