import React from 'react';
import PropType from 'prop-types';

const exampleText = `In compliance with the request of a friend of mine, who wrote me from the East, I called on good-natured, garrulous old Simon Wheeler, and inquired after my friend's friend, Leonidas W. Smiley, as requested to do, and I hereunto append the result.`;
const lineHeights = [
	{
		token: '1',
		usage: 'buttons, navigation, and text not meant to break over a line',
		output: '1',
	},
	{
		token: '2',
		usage:
			'headings, introductory (lead or dek) text, no more than 1-2 sentences',
		output: '1.15',
	},
	{
		token: '3',
		usage:
			'short text (under 1 paragraph), captions, text with a very short or very long measure',
		output: '1.35',
	},
	{
		token: '4',
		usage:
			'short (1-2 paragraphs) of running text, especially with a short measure',
		output: '1.5',
	},
	{
		token: '5',
		usage:
			'a good choice for most reading text, especially text meant for extended reading',
		output: '1.62',
	},
	{
		token: '6',
		usage:
			'shorter text (1-2 paragraphs) meant to be distinguished from other page text, pullquotes',
		output: '1.75',
	},
];

const LineHeightRow = ({ token, usage, output }) => {
	return (
		<tr>
			<th scope="row" data-title="Token">
				<span className="text-normal">
					<code className="text-no-wrap">{token}</code>
				</span>
			</th>
			<td data-title="Example">
				<div
					className={`font-sans-4 table:font-sans-6 line-height-sans-${token} measure-2`}>
					{exampleText}
				</div>
			</td>
			<td data-title="Description">
				<div className="font-sans-3 line-height-sans-3 measure-2">
					<strong>usage:</strong> {usage}
				</div>
			</td>
			<td data-title="Output">
				<span>{output}</span>
			</td>
		</tr>
	);
};

const LineHeightTable = () => {
	return (
		<div className="site-table-wrapper">
			<table className="usa-table--borderless site-table-responsive">
				<thead>
					<tr>
						<th scope="col">Token</th>
						<th scope="col">Example</th>
						<th scope="col">Usage</th>
						<th scope="col">Output</th>
					</tr>
				</thead>
				<tbody className="font-mono-2xs">
					{lineHeights.map((def, idx) => (
						<LineHeightRow
							key={idx}
							token={def.token}
							usage={def.usage}
							output={def.output}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

LineHeightTable.propTypes = {};

LineHeightRow.propTypes = {
	token: PropType.string,
	usage: PropType.string,
	output: PropType.string,
};

export default LineHeightTable;
