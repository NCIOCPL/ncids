import React from 'react';
import PropType from 'prop-types';
import { Button } from '@nciocpl/ncids-react';

const sytemList = [
	'lightest',
	'lighter',
	'light',
	'base',
	'dark',
	'darker',
	'darkest',
];
const stateList = ['lighter', 'light', 'base', 'dark', 'darker'];
const themeList = [
	'primary',
	'secondary',
	'accent-warm',
	'accent-cool',
	'error',
	'warning',
	'success',
	'info',
	'base',
];

const ColorTokens = ({ children }) => {
	const getColors = (family) => {
		const getList = family == 'base' ? sytemList : stateList;
		const colors = getList.map((item) => {
			let cn = `ct-${family}`;
			if (item !== 'base') cn += `-${item}`;
			const clrs = <li className={cn}>{item}</li>;
			return clrs;
		});
		return colors;
	};
	const themeColors = themeList.map((item, index) => {
		const cn = `ct-${item}`;
		const clrs = (
			<li>
				<h4 className={cn}>{item}</h4>
				<ul className="family-blocks">{getColors(item)}</ul>
				{index < 4 ? (
					<Button label={item} classes={`usa-button--${item}`} />
				) : null}
			</li>
		);
		return clrs;
	});
	return (
		<div className="container">
			<ul className="color-blocks">{themeColors}</ul>
			<p>basic color tokens / names {children}</p>
		</div>
	);
};

ColorTokens.propTypes = {
	children: PropType.object,
};

export default ColorTokens;
