import PropTypes from 'prop-types';
import React from 'react';

const List = ({ children, component, variant }) => {
	const listClass =
		variant === 'unstyled' ? 'usa-list usa-list--unstyled' : 'usa-list';

	const listItemClass =
		component === 'footer' ? 'usa-footer__secondary-link' : null;

	const listItems = children.map((child) => (
		<li
			className={listItemClass}
			key={'list-item-' + child.props.children.toString()}>
			{child}
		</li>
	));

	return (
		<>
			{variant === 'ordered' ? (
				<ol className={listClass}>{listItems}</ol>
			) : (
				<ul className={listClass}>{listItems}</ul>
			)}
		</>
	);
};

List.propTypes = {
	children: PropTypes.node,
	component: PropTypes.string,
	variant: PropTypes.oneOf(['ordered', 'unordered', 'unstyled']),
};

List.defaultProps = {
	variant: 'unordered',
};

export default List;
