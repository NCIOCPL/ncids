import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import copy from 'copy-to-clipboard';
import { Button } from '@nciocpl/ncids-react';

const CopyToClipboard = ({ value }) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (copied) setCopied(false);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [copied]);

	return (
		<Button
			onClick={() => {
				copy(value);
				setCopied(true);
				console.log(value);
			}}
			label={copied ? 'copied' : 'copy'}
		/>
	);
};

CopyToClipboard.propTypes = {
	value: PropType.string,
};
export default CopyToClipboard;
