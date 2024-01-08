import React, { useState, useEffect } from 'react';

export const BackToTop = () => {
	const [scrollTop, setScrollTop] = useState(0);
	const [myStyle, setStyle] = useState(
		'grid-container usa-footer__return-to-top'
	);

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		setStyle('usa-footer__nci-return-to-top');

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const visibility = scrollTop > 2 ? 'show' : 'hide';
	return (
		<div className={`${myStyle} ${visibility}`}>
			<a href="#top" aria-label="Back To Top">
				<span>Back To Top</span>
			</a>
		</div>
	);
};

export default BackToTop;
