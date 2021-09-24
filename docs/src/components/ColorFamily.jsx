import React from 'react';
import PropType from 'prop-types';

import luminance from './utils/luminance';
import grade from './utils/grade';
import hexToRgb from './utils/hexToRgb';

/**
 * ColorSwatch
 * @param {name} props: shade type for that swatch [lighter/darker/base]
 * @param {family} props: color family the hex value is from [navy/red/teal]
 * @param {hex} props: hex color value for swatch [#006297]
 */
export const ColorSwatch = (props) => {
	return props.children;
};
ColorSwatch.propTypes = {
	children: PropType.oneOfType([PropType.object, PropType.array]),
};
/**
 * ColorSwatch
 * @param {label} props: display name for that group
 * if none provided it just hides the h4 tag to allow for
 * stacking groups together with no visible gap
 */
export const ColorFamily = ({ children, label }) => {
	const data = !children
		? []
		: children.constructor === Array
		? children
		: [children];
	const listContent = () => {
		let content = [];
		console.log(data);
		for (let i = 0; i < data.length; i++) {
			const { name, family, hex } = data[i].props;
			const rgb = hexToRgb(hex);
			const lum = luminance(...rgb);
			const colorGrade = grade(lum);
			const textColor = colorGrade > 40 ? '#FFFFFF' : '#F000000';
			content.push(
				<li
					key={`${label}-${name}-${grade}`}
					style={{ background: `${hex}`, color: `${textColor}` }}>
					<h3>{name}</h3>
					<h4>{hex}</h4>
					<h4>{`rgb(${rgb[0]}, ${rgb[1]} ,${rgb[2]})`}</h4>
					<p>
						{colorGrade == 'invalid' ? colorGrade : `${family}-${colorGrade}`}
					</p>
				</li>
			);
		}
		return content;
	};
	const colorSwatchs = !children ? '' : listContent();
	return (
		<div className="color-family" aria-label={`${label}`}>
			{label && <h3>{label}</h3>}
			<div className="family-blocks">{colorSwatchs}</div>
		</div>
	);
};

ColorFamily.propTypes = {
	children: PropType.oneOfType([PropType.object, PropType.array]),
	data: PropType.object,
	label: PropType.string,
};
