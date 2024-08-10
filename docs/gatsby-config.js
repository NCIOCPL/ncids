const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'NCI Design System',
		shortName: 'NCI DS',
		imageUrl: '',
		description: '',
	},
	// This path prefix is used by the dev preview site in order to serve
	// up content based on the branch/pr/or tag name. This must be used
	// with the "build --prefix-paths" option. So if that option is not
	// passed in, this is not used.
	pathPrefix: process.env.DOCS_PREFIX_PATH
		? process.env.DOCS_PREFIX_PATH
		: undefined,
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: '/icons/',
				},
			},
		},
		'gatsby-transformer-yaml',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
					},
				],
				// mdxOptions: {
				// 	remarkPlugins: [
				// 		remarkGfm,
				// 	],
				// },
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: path.resolve('./content'),
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: require.resolve('./src/images/favicon.png'),
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				sassOptions: {
					includePaths: [
						path.join(__dirname, './node_modules/@nciocpl/ncids-css/packages'),
						path.join(
							__dirname,
							'./node_modules/@nciocpl/ncids-css/uswds-packages'
						),
					],
				},
			},
		}
	],
};
