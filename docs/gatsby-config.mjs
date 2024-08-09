import path from 'path';
import { createRequire } from "module"
import { fileURLToPath } from "url"
import yaml from 'js-yaml';
import fs from 'fs';

import remarkGfm from "remark-gfm"
import remarkMdxDisableExplicitJsx from './remark-mdx-disable-explicit-jsx.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

const getUswdsVersion = () => {
	const pnpmLock = yaml.load(fs.readFileSync('../pnpm-lock.yaml', 'utf8'));

	const uswdsVersion =
		pnpmLock?.importers['packages/ncids-css']?.devDependencies['@uswds/uswds']
			?.specifier;

	return uswdsVersion !== null ? `v${uswdsVersion}` : 'unknown';
};

// We need to read the lerna version and the USWDS version from the package.json in
// gatsby-node.js so we can pass it to the version ribbon component. This is done
// here because these files need to be read "server-side" and can't be accessed
// in-browser.
const lernaJson = require('../lerna.json');
// Gets the NCIDS versions from the lerna file, which will have a version without 'v'.
const ncidsVersion = `v${lernaJson.version}`;

const uswdsVersion = getUswdsVersion();


const config = {
	// The gatsby-plugin-remove-trailing-slashes has been replaced by the trailingSlash option.
	trailingSlash: 'never',
	siteMetadata: {
		title: 'NCI Design System',
		shortName: 'NCI DS',
		imageUrl: '',
		description: '',
		versionInfo: {
			ncidsVersion,
			uswdsVersion,
		},
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
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// Technically 88ex is like 761.something.
							maxWidth: 761,
							wrapperStyle: `margin: 1em 0 0 0;`,
							linkImagesToOriginal: false,
						},
					},
				],
				mdxOptions: {
					remarkPlugins: [
						[remarkMdxDisableExplicitJsx, { whiteList: ["a"] }],
						remarkGfm,
					],
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

export default config;
