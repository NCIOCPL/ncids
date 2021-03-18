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
					<button
						className="usa-accordion__button usa-nav__link"
						aria-expanded="false"
						aria-controls="nav-section-about-cancer">
						<span>Item 1</span>
					</button>
					<div
						id="nav-section-about-cancer"
						className="usa-nav__submenu usa-megamenu"
						hidden>
						<div className="grid-row grid-gap-4">
							{/* First Section */}
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/about-cancer/understanding/">
											<strong>Sub-Item 1</strong>
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/about-cancer/understanding/what-is-cancer">
											Sub-Sub-Item 1
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/about-cancer/understanding/statistics">
											Sub-Sub-item 2
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/about-cancer/understanding/disparities">
											Sub-Sub-item 3
										</Link>
									</li>
								</ul>
							</div>

							{/* Causes & Prevention */}
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/about-cancer/causes-prevention/">
											<strong>Sub-Item 2</strong>
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/about-cancer/causes-prevention/risk">
											Sub-Subire 1
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/about-cancer/causes-prevention/genetics">
											Sub-Subire 2
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/about-cancer/causes-prevention/patient-prevention-overview-pdq">
											Sub-Subire 3
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</li>

				<li className="usa-nav__primary-item">
					<button
						className="usa-accordion__button usa-nav__link"
						aria-expanded="false"
						aria-controls="nav-section-cancer-types">
						<span>Item 2</span>
					</button>
					<div
						id="nav-section-cancer-types"
						className="usa-nav__submenu usa-megamenu"
						hidden>
						<div className="grid-row grid-gap-4">
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											A very long navigation link that goes onto two lines
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</li>

				<li className="usa-nav__primary-item">
					<button
						className="usa-accordion__button usa-nav__link"
						aria-expanded="false"
						aria-controls="nav-section-grants">
						<span>Item 3</span>
					</button>
					<div
						id="nav-section-grants"
						className="usa-nav__submenu usa-megamenu"
						hidden>
						<div className="grid-row grid-gap-4">
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											A very long navigation link that goes onto two lines
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</li>

				<li className="usa-nav__primary-item">
					<button
						className="usa-accordion__button usa-nav__link"
						aria-expanded="false"
						aria-controls="nav-section-news">
						<span>Item 4</span>
					</button>
					<div
						id="nav-section-news"
						className="usa-nav__submenu usa-megamenu"
						hidden>
						<div className="grid-row grid-gap-4">
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											A very long navigation link that goes onto two lines
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</li>

				<li className="usa-nav__primary-item">
					<button
						className="usa-accordion__button usa-nav__link"
						aria-expanded="false"
						aria-controls="nav-section-about">
						<span>Item 5</span>
					</button>
					<div
						id="nav-section-about"
						className="usa-nav__submenu usa-megamenu"
						hidden>
						<div className="grid-row grid-gap-4">
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											A very long navigation link that goes onto two lines
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
							<div className="usa-col">
								<ul className="usa-nav__submenu-list">
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
									<li className="usa-nav__submenu-item">
										<Link to="/" className="">
											Navigation link
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</nav>
);

export default TmpNav;
