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
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: '/icons/',
				},
			},
		},
		'gatsby-plugin-remove-trailing-slashes',
		{
			resolve: `gatsby-plugin-catch-links`,
			options: {
				excludePattern: /(\/ncids-js\/.*)/,
			},
		},
		'gatsby-transformer-yaml',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.mdx', '.md'],
				defaultLayouts: {
					default: require.resolve(
						'./src/components/layouts/default-layout.jsx'
					),
					components: require.resolve(
						'./src/components/layouts/component-page-layout.jsx'
					),
					utility: require.resolve(
						'./src/components/layouts/utility-page-layout/utility-page-layout.jsx'
					),
				},
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
					},
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: path.resolve('./content'),
				ignore: [
					`${path.resolve('./content/components')}/**`,
					`${path.resolve('./content/foundations')}/**`,
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'components',
				path: path.resolve('./content/components'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'utility',
				path: path.resolve('./content/foundations'),
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
		},
		// This is for handling PNPM's way of storing module dependencies.
		// PNPM does not store gatsby dependencies in the local
		// node_modules, so without this plugin that adds additional
		// webpack resolvers, docs can't build.
		{
			resolve: 'gatsby-plugin-pnpm',
		},
	],
};
