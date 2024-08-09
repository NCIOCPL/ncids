// sort paths utility
const sortMdxPaths = (allPaths, match) => {
	//items with 'index' at the front
	const sortIndex = allPaths.sort(
		(a, b) => b.path.indexOf(match) - a.path.indexOf(match)
	);
	//sort by shortest paths
	const shortestPath = sortIndex.sort((a, b) => a.plength - b.plength);
	return shortestPath;
};

// build object for navigation components (TopNavigation/SideNavigation)
const buildNavigationObject = (navData) => {
	// object being built
	// root.children is the array of top navigation categories
	const root = { name: 'root', children: [] };
	for (const item of navData) {
		// get paths of pages
		const segments = item.path.split('/');
		let current = root;
		for (const segment of segments) {
			if (!segment) continue;
			let child = current.children.find((c) => c.name === segment);
			if (!child) {
				// make new object using path remove mdx and index
				// to clean up then check name for home
				const name = segment.replace('.mdx', '');
				const path = item.path.replace('.mdx', '').replace('/index', '/');
				if (name === 'index') continue; // If home, don't put in main navigation
				child = {
					name,
					path,
					navOrder: item.navOrder,
					label: item.label,
					children: [],
				};
				current.children.push(child);
				// Order TopNavigation based on navOrder
				// TopNavigation items should have a nav_order for sorting
				if (child?.navOrder < 999999) {
					// only sort top level navigation (current.children)
					current.children = current.children.sort(
						(a, b) => a.navOrder - b.navOrder
					);
				}
			}
			current = child;
		}
	}
	return root.children;
};

// mdxData - the array of paths from useNavData graphql query
const buildNavigationFromMdx = (mdxData) => {
	// Go through MDX data and return it in a more sortable format
	const sanitized = mdxData.allMdx?.edges.map((item) => {
		// get file path for each item and split at the
		// content folder as we know this to be the root path
		const path = item.node.internal.contentFilePath.split('content')[1];
		const segments = path.split('/');
		return {
			path,
			label: item.node.frontmatter.nav_label,
			title: item.node.frontmatter.title,
			navOrder: item.node.frontmatter.nav_order,
			plength: segments.length,
		};
	});
	// making the index.mdx files and shortest path
	// show up first in the navigation object
	// this lets the root index file of all sections
	// appear first for generation
	const sortedNavPaths = sortMdxPaths(sanitized, '/index.mdx');
	return buildNavigationObject(sortedNavPaths);
};

export default buildNavigationFromMdx;
