import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-sidenav.scss';

const html = `
<div class="grid-container">
	<div class="grid-row grid-gap">
		<div class="grid-col-3">
			<nav aria-label="Secondary navigation">
				<ul class="usa-sidenav">
					<li class="usa-sidenav__item">
						<a
							href="#"
							data-menu-id="11844"
							class="usa-current usa-current--nci-ancestor"
						>
							Cancer Treatment
						</a>
						<ul class="usa-sidenav__sublist">
							<li class="usa-sidenav__item">
								<a
									href="#"
									data-menu-id="911277"
									class="usa-current usa-current--nci-ancestor"
								>
									Types of Cancer Treatment
								</a>
								<ul class="usa-sidenav__sublist">
									<li class="usa-sidenav__item">
										<a
											href="#"
											data-menu-id="1097231"
										>
											Biomarker Testing
										</a>
									</li>

									<li class="usa-sidenav__item">
										<a
											href="#"
											data-menu-id="912836"
										>
											Chemotherapy
										</a>
									</li>

									<li class="usa-sidenav__item">
										<a
											href="#"
											data-menu-id="912900"
										>
											Hormone Therapy
										</a>
									</li>

									<li class="usa-sidenav__item">
										<a
											href="#"
											data-menu-id="1151711"
										>
											Hyperthermia
										</a>
									</li>

									<li class="usa-sidenav__item">
										<a
											href="#"
											data-menu-id="915528"
											class="usa-current usa-current--nci-ancestor"
										>
											Immunotherapy
										</a>
										<ul class="usa-sidenav__sublist">
											<li class="usa-sidenav__item">
												<a
													href="#"
													data-menu-id="1150106"
												>
													Cancer Treatment Vaccines
												</a>
											</li>

											<li class="usa-sidenav__item">
												<a
													href="#"
													data-menu-id="1150091"
												>
													Checkpoint Inhibitors
												</a>
											</li>

											<li class="usa-sidenav__item">
												<a
													href="#"
													data-menu-id="1150111"
												>
													Immune System Modulators
												</a>
											</li>

											<li class="usa-sidenav__item">
												<a
													href="#"
													data-menu-id="1150101"
												>
													Monoclonal Antibodies
												</a>
											</li>

											<li class="usa-sidenav__item">
												<a
													href="#"
													data-menu-id="1150086"
													class="usa-current usa-current--nci-ancestor"
												>
													Side Effects
												</a>
												<ul class="usa-sidenav__sublist">
													<li class="usa-sidenav__item">
														<a
															href="#"
															data-menu-id="1150106"
															class="usa-current"
															aria-current="page"
														>
															Lorum Ipsum Dolor Sit Amet
														</a>
													</li>
												</ul>
											</li>

											<li class="usa-sidenav__item">
												<a
													href="#"
													data-menu-id="1150096"
												>
													T-cell Transfer Therapy
												</a>
											</li>
										</ul>
									</li>

									<li class="usa-sidenav__item">
										<a
											href="#"
											data-menu-id="1151716"
										>
											Photodynamic Therapy
										</a>
									</li>

									<li class="usa-sidenav__item">
										<a
											href="#"
											data-menu-id="916947"
											class="nci-has-children"
										>
											Radiation Therapy
										</a>
									</li>

									<li class="usa-sidenav__item">
										<a
											href="#"
											data-menu-id="915538"
										>
											Stem Cell Transplant
										</a>
									</li>

									<li class="usa-sidenav__item">
										<a
											href="#"
											data-menu-id="911286"
											class="nci-has-children"
										>
											Surgery
										</a>
									</li>

									<li class="usa-sidenav__item">
										<a
											href="#"
											data-menu-id="911288"
											class="nci-has-children"
										>
											Targeted Therapy
										</a>
									</li>
								</ul>
							</li>

							<li class="usa-sidenav__item">
								<a
									href="#"
									data-menu-id="898464"
								>
									Side Effects of Cancer Treatment
								</a>
							</li>

							<li class="usa-sidenav__item">
								<a
									href="#"
									data-menu-id="941577"
									class="nci-has-children"
								>
									Clinical Trials Information
								</a>
							</li>

							<li class="usa-sidenav__item">
								<a
									href="#"
									data-menu-id="918919"
									class="nci-has-children"
								>
									A to Z List of Cancer Drugs
								</a>
							</li>

							<li class="usa-sidenav__item">
								<a
									href="#"
									data-menu-id="917500"
									class="nci-has-children"
								>
									Complementary &amp; Alternative Medicine (CAM)
								</a>
							</li>

							<li class="usa-sidenav__item">
								<a href="#" data-menu-id="936692">
									Questions to Ask about Your Treatment
								</a>
							</li>

							<li class="usa-sidenav__item">
								<a href="#" data-menu-id="937976">
									Research
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</div>
`;

export const NCISidenavFull = () => <TestCase css={css} html={html} />;
