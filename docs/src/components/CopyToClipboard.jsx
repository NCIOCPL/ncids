import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import copy from 'copy-to-clipboard';

const CopyToClipboard = ({ value }) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (!copied) return;
		const timeout = setTimeout(() => {
			setCopied(false);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [copied]);

	const handleCopy = () => {
		copy(value);
		setCopied(true);
	};

	return (
		<button
			className="site-copy-button"
			onClick={handleCopy}
			aria-label="Copy code to Clipboard">
			<svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
				<g fill="currentColor">
					<path d="M10 19h8V8h-8v11zM8 7.992C8 6.892 8.902 6 10.009 6h7.982C19.101 6 20 6.893 20 7.992v11.016c0 1.1-.902 1.992-2.009 1.992H10.01A2.001 2.001 0 018 19.008V7.992z"></path>
					<path d="M5 16V4.992C5 3.892 5.902 3 7.009 3H15v13H5zm2 0h8V5H7v11z"></path>
				</g>
			</svg>
		</button>
	);
};

CopyToClipboard.propTypes = {
	value: PropType.string,
};
export default CopyToClipboard;
