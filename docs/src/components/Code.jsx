import React from 'react';
import PropType from 'prop-types';
import CopyToClipboard from './CopyToClipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/palenight';

const Code = ({ className, children }) => {
	const language = className ? className.replace(/language-/, '') : '';
	const code = children.trim();
	return (
		<Highlight {...defaultProps} theme={theme} code={code} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<div>
					<CopyToClipboard value={code} />
					<pre className={className} style={style}>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				</div>
			)}
		</Highlight>
	);
};

Code.propTypes = {
	className: PropType.string,
	children: PropType.string,
};
export default Code;
