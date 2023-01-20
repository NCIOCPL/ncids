#!/usr/bin/env node

/******************************************************************************
 * This script regenerates the uswds partials in our packages directory.
 *****************************************************************************/

const path = require('path');
const fs = require('fs');

const uswdsPackagesDir = path.join(__dirname, '..', 'uswds-packages');
const packagesDir = path.join(__dirname, '..', 'packages');

const uswdsPackageNames = fs.readdirSync(uswdsPackagesDir);

for (const packageName of uswdsPackageNames) {
	const scssExport = `@forward '../uswds-packages/${packageName}';\n`;
	fs.writeFileSync(
		path.join(packagesDir, `_${packageName}.scss`),
		scssExport,
	);
}
