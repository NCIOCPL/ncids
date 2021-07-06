import React from 'react';
import { Link } from 'gatsby';

import logo from '../images/nci-logo-full.svg';
import List from './list/list';

const Footer = () => (
	<footer className="usa-footer site-footer" role="contentinfo">
		<div className="footer-section-bottom">
			<div className="grid-container">
				<div className="grid-row padding-3">
					<div className="tablet:grid-col">
						<div className="logo-links">
							<a className="footer-logo media_link" href="https://18f.gsa.gov">
								<img src={logo} width="50" alt="Agency logo" />
							</a>
						</div>
					</div>
					<div className="tablet:grid-col"></div>
					<div className="tablet:grid-col">
						<List variant="unstyled" component="footer">
							<Link to="/#">Link 1</Link>
							<Link to="/#">Link 2</Link>
							<Link to="/#">Link 3</Link>
						</List>
					</div>
					<div className="tablet:grid-col">
						<List variant="unstyled" component="footer">
							<Link to="/#">Link A</Link>
							<Link to="/#">Link B</Link>
							<Link to="/#">Link C</Link>
						</List>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
