import React from 'react';
import PropTypes from 'prop-types';
import * as utilityModules from '../../../data/utility-modules.json';

import Code from '../../Code';
import FrontmatterMarkdown from '../../frontmatter-markdown';
import MarkdownHeader from '../../markdown-heading';
import UtilityClassTableFactory from './utility-class-table-factory';
import UtilityInfoTable from './utility-info-table';
import UtilityMixinTable from './utility-mixin-table';

/**
 * This component renders a single utility module on a foundation/utility page.
 * @param {*} param0
 */
const UtilityPageModuleDisplay = ({
	name,
	utility_module_name,
	description = null,
	mixins_and_functions = null,
	utility_class_intro = null,
	utility_class_display_component = null,
	utility_class_display_params = null,
	utility_examples = null,
}) => {
console.log(utility_module_name);
	const Heading3 = MarkdownHeader(3);
	const Heading4 = MarkdownHeader(4);

	// Get module information or draw an alert.
	const utilityInfo = utility_module_name
		? utilityModules[utility_module_name]
		: null;

	if (!utilityInfo) {
		return (
			<div className="usa-alert usa-alert--error" role="alert">
				<div className="usa-alert__body">
					<h3 className="usa-alert__heading">
						Error Getting Module Information
					</h3>
					<p className="usa-alert__text">
						{utility_module_name ?? '[utility_module_name]'} is not defined in
						data/utility-modules.json
					</p>
				</div>
			</div>
		);
	}

	// Set up a var to easily tell if we have mixin utilities or not.
	const mixinUtilities = Array.isArray(utilityInfo.utilities)
		? utilityInfo.utilities
		: [];
	const hasMixinInformation =
		mixinUtilities.length > 0 ||
		mixins_and_functions?.intro ||
		mixins_and_functions?.outtro;

	return (
		<div className="usa-prose margin-bottom-4">
			<hr />
			<Heading3>{name}</Heading3>
			<FrontmatterMarkdown content={description} />

			{/* Only draw this if we have mixins to draw or content. */}
			{hasMixinInformation && (
				<>
					<Heading4 prefix={utility_module_name}>Mixins and Functions</Heading4>
					<FrontmatterMarkdown content={mixins_and_functions?.intro} />
					<UtilityMixinTable utilities={mixinUtilities} />
					<FrontmatterMarkdown content={mixins_and_functions?.outtro} />
				</>
			)}

			<Heading4 prefix={utility_module_name}>Utility Classes</Heading4>
			{/* Render information table with modifiers and file sizes */}
			<UtilityInfoTable utilityModuleName={utility_module_name} />

			<FrontmatterMarkdown content={utility_class_intro} />

			{/* Render the Utility Class Table to demonstrate utils. */}
			<UtilityClassTableFactory
				utilityClassDisplayComponent={utility_class_display_component}
				utilityClassDisplayParams={utility_class_display_params}
			/>

			{/* Render any code examples of how to use the utility classes. */}
			{utility_examples && (
				<>
					{utility_examples.map((eg, idx) => (
						<React.Fragment key={idx}>
							{eg.heading && (
								<Heading4 prefix={utility_module_name}>{eg.heading}</Heading4>
							)}
							{eg.description && (
								<FrontmatterMarkdown content={eg.description} />
							)}
							{eg.code && (
								<Code className="language-html" nopreview={!eg.preview}>
									{eg.code}
								</Code>
							)}
						</React.Fragment>
					))}
				</>
			)}
		</div>
	);
};

UtilityPageModuleDisplay.propTypes = {
	name: PropTypes.string,
	utility_module_name: PropTypes.string,
	description: PropTypes.string,
	mixins_and_functions: PropTypes.object,
	tokens_and_utilities: PropTypes.object,
	utility_class_intro: PropTypes.string,
	utility_class_display_component: PropTypes.string,
	utility_class_display_params: PropTypes.object,
	utility_examples: PropTypes.arrayOf(PropTypes.object),
};

export default UtilityPageModuleDisplay;
