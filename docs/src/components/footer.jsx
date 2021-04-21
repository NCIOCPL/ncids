import React from 'react';
import logo from '../images/nci-logo-full.svg';

const Footer = () => (
	<footer className="usa-footer site-footer" role="contentinfo">
		<div className="footer-section-bottom bg-base-lighter">
			<div className="grid-container">
				<div className="grid-row padding-3">
					<div className="tablet:grid-col">
						<div className="logo-links">
							<a className="footer-logo media_link" href="https://cancer.gov">
								<img src={logo} width="200" alt="Agency logo" style={{marginLeft:'-1.625rem'}}/>
							</a>
						</div>
					</div>
					<div className="tablet:grid-col"></div>
					<div className="tablet:grid-col">
						<ul className="add-list-reset">
							<li>
							<a className="media_link" href="https://www.cancer.gov/">National Cancer Institute</a>
							</li>
							<li>
								<a className="media_link" href="https://usa.gov">USA.gov</a>
							</li>
						</ul>
					</div>
					<div className="tablet:grid-col">
						<ul className="add-list-reset">
						<li>
								<a href="https://github.com/ncids">github.com/ncids</a>
							</li>
							<li>
								<a href="https://github.com/ncids">storybook/react</a>
							</li>
							<li>
								<a href="https://github.com/ncids">storybook/html</a>
							</li>
							<li>
								<a href="https://github.com/ncids">issues/bugs</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
