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
			if (context?.args?.uswdsBehaviorJs) uswdsInitComponent(context.args.uswdsBehaviorJs);
			const initializedNcidsInstances = (context?.args?.ncidsInitJs) ? ncidsInitComponent(context.args.ncidsInitJs) : [];
			return () => {
				// tear down
				if (context?.args?.uswdsBehaviorJs) uswdsDestroyComponent(context.args.uswdsBehaviorJs);
				if (initializedNcidsInstances.length > 0) ncidsDestroyComponent(initializedNcidsInstances);
			};
		}, []);
		return story();
	},
];

/**
 * USWDS on sequence: "init", "add"
 * @param component - USWDS component receptor behavior
 */
const uswdsInitComponent = (component) => {
	const target = document.body;
	if (Array.isArray(component)) {
		component.forEach((comp) => {
			comp.on(target);
		});
	} else {
		component.on(target);
	}
};

/**
 * USWDS off sequence: "teardown", "remove"
 * @param component - USWDS component receptor behavior
 */
const uswdsDestroyComponent = (component) => {
	const target = document.body;
	component.off(target);
};

/**
 * Fire off initialization callbacks.
 * @param {Function} initializer - this is an initialization function registered on the component. It should return the initialized components.
 * @returns {Object[]} - an array of the initialized components.
 */
const ncidsInitComponent = (initializer) => {
	const rtn = initializer();
	if (rtn.isArray()) {
		return rtn;
	} else {
		return [rtn];
	}
};

/**
 * Fire off initialization callbacks.
 * @param initializedNcidsInstances - the initialized ncids instances.
 */
const ncidsDestroyComponent = (initializedNcidsInstances) => {
	for (const instance of initializedNcidsInstances) {
		if (typeof instance.unregister === 'function') {
			instance.unregister();
		} else {
			console.error(`Registered instance of component is lacking unregister. ${instance}`);
		}
	}
};
