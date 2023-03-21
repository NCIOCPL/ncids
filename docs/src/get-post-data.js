import { useStaticQuery, graphql } from 'gatsby';

function getPostData() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const data = useStaticQuery(graphql`
		{
			allMdx(sort: { fields: frontmatter___name, order: ASC }) {
				totalCount
				edges {
					node {
						frontmatter {
							title
							section
							name
							url
						}
						excerpt
					}
				}
			}
		}
	`);

	const sanitized = data.allMdx?.edges.map((item) => {
		return item.node.frontmatter;
	});

	let categories = [];
	sanitized.map((item) => {
		if (!categories.includes(item.section) && item.url.includes('index')) {
			categories.push(item);
		}
	});

	let navData = [];
	categories.map((cat) => {
		let children = [];
		sanitized.map((item) => {
			if (item.section === cat.section) children.push(item);
		});
		const config = {
			...cat,
			url: cat.url.replace('index', ''),
			children,
		};
		navData.push(config);
	});

	return navData;
}

export default getPostData;
