import React from 'react';
import PropTypes from 'prop-types';

/**
 * This is a helper to render either the code block or the link block to the tokens.
 * @param {*} param
 * @returns
 */
const renderParamFragment = (param) => {
	// TODO: Future item: the token and find its URL so you can make it a link.
	const prefixString =
		param.prefix && String(param.prefix).trim() !== '' ? param.prefix : '';
	// TODO: We will really need to set isQuoted in the information for those params that do not have prefixes, but must be quoted.
	const quoteString = prefixString !== '' ? "'" : '';

	return (
		<>
			{quoteString}
			{prefixString}
			<code className="bg-base-lighter">{param.param}</code>
			{quoteString}
		</>
	);
};

const renderUtilityClass = (utilityClass) => {
	const params = Array.isArray(utilityClass.params) ? utilityClass.params : [];
	return (
		<>
			.{utilityClass.class_base}
			{params.map((param, idx) => (
				<React.Fragment key={idx}>-{renderParamFragment(param)}</React.Fragment>
			))}
		</>
	);
};

const renderMixin = (mixin) => {
	const params = Array.isArray(mixin.params) ? mixin.params : [];
	if (params.length > 0) {
		return (
			<>
				{mixin.mixin_name}(
				{params.map((param, idx) => (
					<React.Fragment key={idx}>
						{renderParamFragment(param)}
						{idx < params.length - 1 ? ',' : ''}
					</React.Fragment>
				))}
				)
			</>
		);
	} else {
		return <>{mixin.mixin_name}</>;
	}
};

const renderMixinsAndFunctionsRow = (
	{ utility_class, mixin, examples },
	idx
) => {
	return (
		<tr key={idx}>
			<th scope="row" data-label="Utility">
				{renderUtilityClass(utility_class)}
			</th>
			<td data-label="Mixin">{renderMixin(mixin)}</td>
			<td data-label="Example">
				{examples.map((ex, idx) => (
					<span
						key={idx}
						className="display-block {idx > 1 ? `margin-top-1` : ``}">
						{ex}
					</span>
				))}
			</td>
		</tr>
	);
};

/**
 * Component for drawing the utility class/mixin naming tables.
 * @param {*} param0
 * @returns
 */
const UtilityMixinTable = ({ utilities }) => {
	return (
		<table className="usa-table usa-table--stacked usa-table--borderless">
			<thead>
				<tr>
					<th scope="col" data-title="Utility">
						Utility
					</th>
					<th scope="col" data-title="Mixin">
						Mixin
					</th>
					<th scope="col" data-title="Example">
						Example
					</th>
				</tr>
			</thead>
			<tbody className="font-mono-3xs">
				{utilities.map(renderMixinsAndFunctionsRow)}
			</tbody>
		</table>
	);
};

UtilityMixinTable.propTypes = {
	utilities: PropTypes.arrayOf(PropTypes.object),
};

export default UtilityMixinTable;
