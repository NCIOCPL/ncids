#!/usr/bin/env node

const path = require('path');
const rimrafSync = require('rimraf').sync;
const mkdirp = require('mkdirp');
const glob = require('glob');
const ncp = require('ncp').ncp;
const config = require('../package.json')?.uswdsSync;

/******************************************************************************
 * This script is for copying over the packages directory of our patched copy
 * of USWDS. It is meant to run on post install and after patch-package runs.
 *****************************************************************************/

const localUswdsPackageDir = path.normalize(
	path.join(__dirname, '..', './uswds-packages'),
);
const localInternalUswdsDir = path.normalize(
	path.join(__dirname, '..', './internal-uswds'),
);
const localUswdsImgDir = path.normalize(
	path.join(__dirname, '..', './uswds-img'),
);

// 1. Rimraf the old uswds-packages in this folder
rimrafSync(localUswdsPackageDir);
rimrafSync(localInternalUswdsDir);
rimrafSync(localUswdsImgDir);

// 2. Make the folder again if it does not exist.
mkdirp.sync(localUswdsPackageDir);
mkdirp.sync(localInternalUswdsDir);
mkdirp.sync(localUswdsImgDir);

// 3. Get a list of all the sass files in uswds packages.
const uswdsModuleEntry = require.resolve('@uswds/uswds');
const uswdsModulePath = uswdsModuleEntry.substring(
	0,
	uswdsModuleEntry.indexOf('@uswds/uswds') + '@uswds/uswds'.length,
);
const uswdsPackageSrc = path.join(uswdsModulePath, 'packages');
const excludePackagePaths = (config?.excludePackages || []).map((excludePath) =>
	path.join(uswdsPackageSrc, excludePath),
);
const internalPackagePaths = (config?.internalPackages || []).map(
	(internalPath) => path.join(uswdsPackageSrc, internalPath),
);
const uswdsImgSrc = path.join(uswdsModulePath, 'dist/img');

// 4. Get a list of all files, filtering out bad ones.
const fileList = glob.sync(path.join(uswdsPackageSrc, '**', '*.scss'));

const filesMinusExcludeDirs = Array.from(
	new Set(fileList.map((filePath) => path.dirname(filePath))),
)
	.sort()
	.filter(
		(dir) => !excludePackagePaths.some((excludePath) => dir.startsWith(`${excludePath}/`) || dir === excludePath),
	);

const publicUSWDSDirs = filesMinusExcludeDirs.filter(
	(dir) => !internalPackagePaths.some((internalPath) => dir.startsWith(`${internalPath}/`) || dir === internalPath),
);

const internalUswdsDirs = filesMinusExcludeDirs.filter((dir) =>
	internalPackagePaths.some((internalPath) => dir.startsWith(`${internalPath}/`) || dir === internalPath),
);

// Filter function for NCP
const ncpfilter = (whitelistDirs) => (filePath) => {
	// ncp gives you everything, dirs, files, etc.
	// It always starts with the src for some stupid reason.
	if (filePath === uswdsPackageSrc) {
		return true;
	}

	const ext = path.extname(filePath);
	if (ext === '') {
		// We want to avoid copying over empty directories.
		return whitelistDirs.some(
			(dir) => filePath === dir || dir.startsWith(filePath),
		);
	} else if (ext === '.scss') {
		return whitelistDirs.includes(path.dirname(filePath));
	} else {
		return false;
	}
};

// 4. Copy all scss Filtering out the list of files based on what is allowed
// in the config
ncp(
	uswdsPackageSrc,
	localUswdsPackageDir,
	{
		filter: ncpfilter(publicUSWDSDirs),
		stopOnErr: true,
	},
	(err) => {
		if (err) {
			console.error('Error copying public packages');
			console.error(err);
			process.exit(1);
		} else {
			ncp(
				uswdsPackageSrc,
				localInternalUswdsDir,
				{
					filter: ncpfilter(internalUswdsDirs),
					stopOnErr: true,
				},
				(err2) => {
					if (err2) {
						console.error('Error copying internal packages');
						console.error(err2);
						process.exit(1);
					} else {
						console.log('Copy Complete');
					}
				},
			);
		}
	},
);

ncp(uswdsImgSrc, localUswdsImgDir, (err) => {
	if (err) {
		return console.error(err);
		process.exit(1);
	}
	console.log('Images copied');
});
