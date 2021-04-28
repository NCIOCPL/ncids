import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import copy from 'copy-to-clipboard';
import { Button } from '@nciocpl/ncids-react';

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
		<Button
			className="copy-to-clipboard"
			onClick={handleCopy}
			label={copied ? '✅ Copied!' : '💾 Copy Code'}
		/>
	);
};

CopyToClipboard.propTypes = {
	value: PropType.string,
};
export default CopyToClipboard;
