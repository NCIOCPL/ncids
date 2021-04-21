import { Link } from 'gatsby';
import React from 'react';

import close from '../../img/close.svg';

const TmpNav = () => (
	<nav aria-label="Primary navigation" className="usa-nav">
		<div className="usa-nav__inner">
			<button className="usa-nav__close">
				<img src={close} alt="close" />
			</button>
			<ul className="usa-nav__primary usa-accordion">
				<li className="usa-nav__primary-item">
					<Link to="/" title="Home" aria-label="Home">home</Link>
				</li>
				<li className="usa-nav__primary-item">
					<Link to="/components" title="components" aria-label="components">components</Link>
				</li>
				<li className="usa-nav__primary-item">
					<Link to="/color-tokens" title="color tokens" aria-label="color tokens">style tokens</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default TmpNav;
