import React, { useEffect } from 'react';

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story, context) => {
			const { args, parameters } = context;

			useEffect(() => {
				// build up
				if (parameters?.uswdsBehaviorJs) uswdsInitComponent(parameters.uswdsBehaviorJs);
				const initializedNcidsInstances = (parameters?.ncidsInitJs) ? ncidsInitComponent(parameters.ncidsInitJs) : [];
				return () => {
					// tear down
					if (parameters?.uswdsBehaviorJs) uswdsDestroyComponent(parameters.uswdsBehaviorJs);
					if (initializedNcidsInstances.length > 0) ncidsDestroyComponent(initializedNcidsInstances);
				};
			}, []);
			return (
				<>
					<style type="text/css">{parameters?.css}</style>
					<Story/>
				</>
			);
		},
	],
};


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
	if (Array.isArray(rtn)) {
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
		if (instance && typeof instance.unregister === 'function') {
			instance.unregister();
		} else {
			console.error(`Registered instance of component is lacking unregister. ${instance}`);
		}
	}
};


export default preview;
