#!/usr/bin/env node

/******************************************************************************
 * This script is used to stupidly copy USWDS package twig and content for the
 * USWDS stories. This is meant to be run after the patch and sync runs.
 *****************************************************************************/

const path = require('path');
const fs = require('fs');
const glob = require('glob');

// Step 1. Get the USWDS source path
const uswdsModuleEntry = require.resolve('@uswds/uswds');
const uswdsModulePath = uswdsModuleEntry.substring(
	0,
	uswdsModuleEntry.indexOf('@uswds/uswds') + '@uswds/uswds'.length,
);
const uswdsPackageSrc = path.join(uswdsModulePath, 'packages');

// Step N. Get all usa-* packages we copied.
const uswdsPackagesDir = path.join(__dirname, '..', 'uswds-packages');
const uswdsPackageNames = fs.readdirSync(uswdsPackagesDir).filter((dir) => {
	const stories = glob.sync(path.join(uswdsPackageSrc, dir, '**', '*.stories.js')).map((filePath) => {
		return filePath.split(path.sep).slice(-1);
	});
	//console.log(stories);
	return stories.length > 0;
});

console.log(uswdsPackageNames);

// Step N. Get all the
