import { useStaticQuery, graphql } from 'gatsby';

const useNavData = () => {
	const data = useStaticQuery(graphql`
		query {
			allMdx(sort: { internal: { contentFilePath: ASC } }) {
				totalCount
				edges {
					node {
						frontmatter {
							title
							nav_label
							nav_order
						}
						internal {
							contentFilePath
						}
					}
				}
			}
		}
	`);
	return data;
};

export default useNavData;
