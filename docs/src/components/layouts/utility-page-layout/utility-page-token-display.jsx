import React from 'react';
import PropTypes from 'prop-types';
import FrontmatterMarkdown from '../../frontmatter-markdown';
import MarkdownHeader from '../../markdown-heading';
import DesignTokenTableFactory from './design-token-table-factory';

/**
 * This component renders a design token table on a foundation/utility page.
 * @param {*} param0
 */
const UtilityPageTokenDisplay = ({
	heading,
	heading_level = 2,
	description = null,
	token_info = null,
	sub_tokens = null,
}) => {
	const Heading = MarkdownHeader(heading_level);

	return (
		<div className="usa-prose margin-bottom-4">
			<Heading>{heading}</Heading>
			<FrontmatterMarkdown content={description} />

			{sub_tokens &&
				sub_tokens.map((sub_token) => (
					<UtilityPageTokenDisplay
						heading_level={heading_level + 1}
						key={heading}
						{...sub_token}
					/>
				))}

			{/* This display is showing tokens vs being nested. */}
			{token_info && (
				<DesignTokenTableFactory
					designTokenDisplayComponent={
						token_info.design_token_display_component
					}
					designTokenDisplayParams={token_info.design_token_display_params}
				/>
			)}
		</div>
	);
};

UtilityPageTokenDisplay.propTypes = {
	heading: PropTypes.string,
	heading_level: PropTypes.number,
	description: PropTypes.string,
	design_token_display_component: PropTypes.string,
	design_token_display_params: PropTypes.object,
	sub_tokens: PropTypes.array,
	token_info: PropTypes.object,
};

export default UtilityPageTokenDisplay;
