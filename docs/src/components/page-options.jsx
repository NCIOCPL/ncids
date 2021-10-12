import React from 'react';
import Icon from './icon/icon';
import PropType from 'prop-types';

export const PageOptions = ({ pageTitle }) => {
	const handlePrint = () => {
		window.print();
	};
	const handleMail = () => {
		window.location.href = `mailto:youremail@example.com?subject=${pageTitle}`;
	};
	return (
		<div className="nci-page-options" aria-label="Print Options">
			<div
				role="button"
				tabIndex="0"
				onClick={handleMail}
				onKeyDown={handleMail}
				className="nci-page-options--link">
				<Icon glyph={'envelope'} />
			</div>
			<div
				role="button"
				tabIndex="0"
				onClick={handlePrint}
				onKeyDown={handlePrint}
				className="nci-page-options--link">
				<Icon glyph={'print'} />
			</div>
		</div>
	);
};

PageOptions.propTypes = {
	pageTitle: PropType.string,
};

export default PageOptions;
