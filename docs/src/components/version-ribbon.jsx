import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a banner showing the NCIDS and USWDS version numbers and links to their respective GitHub releases.
 *
 * @param {string} param0.ncidsVersion The NCIDS Version (include "v" before the version number)
 * @param {string} param0.uswdsVersion The NCIDS Version (include "v" before the version number)
 * @returns
 */
const VersionRibbon = ({ ncidsVersion = 'ERROR', uswdsVersion = 'ERROR' }) => {
	return (
		<section
			className="bg-accent-cool-lighter"
			aria-label="NCI Design System Version information">
			<div className="grid-container">
				<ul className="usa-list usa-list--unstyled grid-row grid-gap">
					<li className="grid-col-auto">
						<span className="text-bold font-sans-3xs">
							NCIDS release {ncidsVersion} —{' '}
							<a
								href="https://github.com/NCIOCPL/ncids/releases"
								aria-label="View all NCI Design System Releases">
								view all releases
							</a>
						</span>
					</li>
					<li className="grid-col-auto">
						<span className="text-bold font-sans-3xs">
							US Web Design System (USWDS) Version —{' '}
							<a
								href={`https://github.com/uswds/uswds/releases/tag/${uswdsVersion}`}
								aria-label={`View US Web Design System release ${uswdsVersion}`}>
								release {uswdsVersion}
							</a>
						</span>
					</li>
				</ul>
			</div>
		</section>
	);
};

VersionRibbon.propTypes = {
	ncidsVersion: PropTypes.string,
	uswdsVersion: PropTypes.string,
};

export default VersionRibbon;
