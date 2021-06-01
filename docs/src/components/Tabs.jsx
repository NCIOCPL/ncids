import React, { useState } from 'react';
import PropType from 'prop-types';

export const TabItem = (props) => {
	return props.children;
};
TabItem.propTypes = {
	children: PropType.oneOfType([PropType.string, PropType.array]),
};

export const Tabs = ({ children, label }) => {
	const data = children || [];
	const [visibleTab, setVisibleTab] = useState(0);
	const listTitles = data.map((item, index) => {
		const { displayText, id } = item.props;
		return (
			<button
				aria-controls={`tab__panel-${id}`}
				aria-selected={visibleTab === index ? 'true' : 'false'}
				className="tabs__button"
				id={`tab__button-${id}`}
				key={`tab__button-${id}`}
				onClick={() => setVisibleTab(index)}
				role="tab"
				tabIndex={visibleTab === index ? '-1' : null}>
				{displayText}
			</button>
		);
	});

	const listContent = data.map((item, index) => {
		const { id } = item.props;
		return (
			<div
				hidden={visibleTab === index ? null : 'hidden'}
				id={`${id}`}
				key={`${id}`}
				role="tabpanel"
				tabIndex="0">
				{item}
			</div>
		);
	});
	return (
		<div className="tabs" aria-label={`${label}`}>
			<div className="tabs__button-group">{listTitles}</div>
			<div className="tabs__panel-group">{listContent}</div>
		</div>
	);
};

Tabs.propTypes = {
	children: PropType.array,
	data: PropType.object,
	label: PropType.string,
};
