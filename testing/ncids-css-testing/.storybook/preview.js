import React, { useEffect } from 'react';

// Global storybook parameters
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

// Global storybook decorators
export const decorators = [
	(story, context) => {
		useEffect(() => {
			// build up
			if (context?.args?.behavior) initComponent(context.args.behavior);
			return () => {
				// tear down
				if (context?.args?.behavior) destroyComponent(context.args.behavior);
			};
		}, []);
		return story();
	},
];

/**
 * USWDS on sequence: "init", "add"
 * @param component - USWDS component receptor behavior
 */
const initComponent = (component) => {
	const target = document.body;
	component.on(target);
};

/**
 * USWDS off sequence: "teardown", "remove"
 * @param component - USWDS component receptor behavior
 */
const destroyComponent = (component) => {
	const target = document.body;
	component.off(target);
};
