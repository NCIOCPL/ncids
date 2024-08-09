// This was pulled from https://github.com/iAdramelk/remark-mdx-disable-explicit-jsx based on
// a comment in mdx-js discussion 1770. MDX-js v2 changed how HTML tags are handler,
// treating them as JSX. This plugin allows us to mark certain HTML tags as not
// to be treated as JSX, such as the `<a>` tag. The tags will then pass onto the
// MDXProvider to be handled as one of the component.
// The limited number of downloads, stars and updates in the past year made it a
// good candidate for just copying the code into our repo.
import { visit } from 'unist-util-visit';

const createTest = ({ whiteList, blackList } = {}) => {
	if (whiteList && whiteList.length) {
		return (node) =>
			Boolean(node.data) && Boolean(node.name) && whiteList.includes(node.name);
	} else if (blackList && blackList.length) {
		return (node) =>
			Boolean(node.data) &&
			Boolean(node.name) &&
			!blackList.includes(node.name);
	} else {
		return (node) => Boolean(node.data);
	}
};

export default function remarkMdxDisableExplicitJsx(options = {}) {
	if (typeof options !== `object`) {
		throw new TypeError(`Options should be an object`);
	} else if (options.whiteList && options.blackList) {
		throw new Error(`"whiteList" and "blackList" can't be used together`);
	} else if (options.whiteList && !Array.isArray(options.whiteList)) {
		throw new TypeError(`"whiteList" value should be an array`);
	} else if (options.blackList && !Array.isArray(options.blackList)) {
		throw new TypeError(`"blackList" value should be an array`);
	}

	const test = createTest(options);

	return (root) => {
		visit(root, test, function (node) {
			delete node.data._mdxExplicitJsx;
			delete node.data._xdmExplicitJsx;
		});
	};
}
