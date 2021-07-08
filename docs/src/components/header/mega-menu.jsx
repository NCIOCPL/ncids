import { Link } from 'gatsby';
import React, { useState } from 'react';

export const MegaMenu = () => {
	const [activeItem, setActiveItem] = useState(0);

	return (
		<ul
			aria-label="Primary navigation"
			className="usa-nav__primary usa-accordion"
			role="menubar">
			<li className="usa-nav__primary-item" role="none">
				<button
					onClick={() => setActiveItem(activeItem === 1 ? 0 : 1)}
					aria-controls="extended-mega-nav-section-one"
					aria-expanded={activeItem === 1}
					aria-haspopup="true"
					className="usa-accordion__button usa-nav__link usa-current"
					role="menuitem">
					<span>Section 1</span>
				</button>

				{activeItem === 1 && (
					<div
						aria-label="Section 1"
						className="usa-nav__submenu usa-megamenu"
						id="extended-mega-nav-section-one"
						role="menu">
						<div className="grid-row grid-gap-4">
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link 1
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link 2
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link 3
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link 4
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											A very long navigation link that goes onto two lines
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link 6
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link 7
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link 8
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link 9
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				)}
			</li>

			<li className="usa-nav__primary-item" role="none">
				<button
					onClick={() => setActiveItem(activeItem === 2 ? 0 : 2)}
					aria-controls="extended-mega-nav-section-two"
					aria-expanded={activeItem === 2}
					aria-haspopup="true"
					className="usa-accordion__button usa-nav__link"
					role="menuitem">
					<span>Section 2</span>
				</button>

				{activeItem === 2 && (
					<div
						aria-label="Section 2"
						className="usa-nav__submenu usa-megamenu"
						id="extended-mega-nav-section-two"
						role="menu">
						<div className="grid-row grid-gap-4">
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link 1
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link 2
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link 3
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											A very long navigation link that goes onto two lines
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="#" role="menuitem">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				)}
			</li>
		</ul>
	);
};

export default MegaMenu;
