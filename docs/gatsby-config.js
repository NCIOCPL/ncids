const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'NCI Design System',
		shortName: 'NCI DS',
		imageUrl: '',
		description: '',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-remove-trailing-slashes',
		'gatsby-plugin-catch-links',
		'gatsby-transformer-yaml',
		{
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.mdx', '.md'],
				defaultLayouts: {
					default: require.resolve(
						'./src/components/layouts/default-layout.jsx'
					),
				},
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
		// PostCSS options will go here, as well as include paths.
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				useResolveUrlLoader: false,
			},
		},
	],
};
