import { Link } from 'gatsby';
import React, { useState } from 'react';

export const Nav = () => {
	const [activeItem, setActiveItem] = useState(0);

	return (
		<ul
			aria-label="Primary navigation"
			className="usa-nav__primary usa-accordion"
			role="menubar">
			<li className="usa-nav__primary-item" role="none">
				<button
					onClick={() => setActiveItem(activeItem === 1 ? 0 : 1)}
					className="usa-accordion__button usa-nav__link usa-current"
					aria-expanded={activeItem === 1}
					aria-controls="basic-nav-section-one"
					role="menuitem">
					<span>Section 1</span>
				</button>

				{activeItem === 1 && (
					<ul
						aria-label="Section 1"
						id="basic-nav-section-one"
						className="usa-nav__submenu"
						role="menu">
						<li className="usa-nav__submenu-item" role="none">
							<Link to="#" role="menuitem">
								Navigation link 1
							</Link>
						</li>

						<li className="usa-nav__submenu-item" role="none">
							<Link to="#" role="menuitem">
								Navigation link 2
							</Link>
						</li>

						<li className="usa-nav__submenu-item" role="none">
							<Link to="#" role="menuitem">
								Navigation link 3
							</Link>
						</li>
					</ul>
				)}
			</li>

			<li className="usa-nav__primary-item" role="none">
				<button
					onClick={() => setActiveItem(activeItem === 2 ? 0 : 2)}
					className="usa-accordion__button usa-nav__link"
					aria-expanded={activeItem === 2}
					aria-controls="basic-nav-section-two"
					role="menuitem">
					<span>Section 2</span>
				</button>

				{activeItem === 2 && (
					<ul
						aria-label="Section 2"
						id="basic-nav-section-two"
						className="usa-nav__submenu"
						role="menu">
						<li className="usa-nav__submenu-item" role="none">
							<Link to="#" role="menuitem">
								Navigation link 1
							</Link>
						</li>

						<li className="usa-nav__submenu-item" role="none">
							<Link to="#" role="menuitem">
								Navigation link 2
							</Link>
						</li>

						<li className="usa-nav__submenu-item" role="none">
							<Link to="#" role="menuitem">
								Navigation link 3
							</Link>
						</li>
					</ul>
				)}
			</li>

			<li className="usa-nav__primary-item" role="none">
				<Link to="#" className="usa-nav__link" role="menuitem">
					<span>Simple link</span>
				</Link>
			</li>
		</ul>
	);
};

export default Nav;
