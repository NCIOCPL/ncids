import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import GitHubSlugger from 'github-slugger';

// Create the context
const SluggerContext = createContext(null);

// Create a provider component
export const SluggerProvider = ({ children }) => {
	const slugger = new GitHubSlugger();

	return (
		<SluggerContext.Provider value={slugger}>
			{children}
		</SluggerContext.Provider>
	);
};

SluggerProvider.propTypes = {
	children: PropTypes.any,
};

// Create a hook to use the GitHubSlugger instance
export const useSlugger = () => {
	const context = useContext(SluggerContext);
	if (context === null) {
		throw new Error('useSlugger must be used within a SluggerProvider');
	}
	return context;
};
