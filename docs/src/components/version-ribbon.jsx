import React from 'react';

import useSiteMetadata from '../hooks/use-site-metadata';

/**
 * Displays a banner showing the NCIDS and USWDS version numbers and links to their respective GitHub releases.
 */
const VersionRibbon = () => {
	const siteMetadata = useSiteMetadata();
	const ncidsVersion = siteMetadata?.versionInfo?.ncidsVersion ?? 'ERROR';
	const uswdsVersion = siteMetadata?.versionInfo?.uswdsVersion ?? 'ERROR';

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

VersionRibbon.propTypes = {};

export default VersionRibbon;
