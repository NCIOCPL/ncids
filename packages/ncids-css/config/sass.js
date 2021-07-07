const { formatters } = require('stylelint');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const discardComments = require('postcss-discard-comments');
const filter = require('gulp-filter');
const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const changed = require('gulp-changed');
const dutil = require('./doc-util');
const pkg = require('../package.json');

const task = 'sass';
const normalizeCssFilter = filter('**/normalize.css', { restore: true });

sass.compiler = require('sass');

const IGNORE_STRING = 'This file is ignored';
const ignoreStylelintIgnoreWarnings = (lintResults) =>
	formatters.string(
		lintResults.reduce((memo, result) => {
			const { warnings } = result;
			const fileIsIgnored = warnings.some((warning) =>
				RegExp(IGNORE_STRING, 'i').test(warning.text)
			);

			if (!fileIsIgnored) {
				memo.push(result);
			}

			return memo;
		}, [])
	);

gulp.task('stylelint', () =>
	gulp
		.src('./src/stylesheets/**/*.scss')
		.pipe(
			gulpStylelint({
				failAfterError: true,
				reporters: [
					{
						formatter: ignoreStylelintIgnoreWarnings,
						console: true,
					},
				],
				syntax: 'scss',
			})
		)
		.on('error', dutil.logError)
);

gulp.task('copy-vendor-sass', () => {
	dutil.logMessage('copy-vendor-sass', 'Compiling vendor CSS');

	const source = './node_modules/normalize.css/normalize.css';
	const destination = 'src/stylesheets/lib';

	const stream = gulp
		.src([source])
		.pipe(normalizeCssFilter)
		.pipe(rename('_normalize.scss'))
		.pipe(changed(destination))
		.on('error', (error) => {
			dutil.logError('copy-vendor-sass', error);
		})
		.pipe(gulp.dest(destination));

	return stream;
});

// Places NCIDS color tokens inside src package
gulp.task('copy-color-tokens', () => {
	dutil.logMessage('copy-color-tokens', 'Copying NCIDS color tokens');

	const stream = gulp
		.src('./scss/core/ncids-tokens/**/*.scss')
		.pipe(gulp.dest('dist/scss/core/ncids-tokens/'));

	return stream;
});
// Places NCIDS color settings inside src package, this points to the updates
// color familes in ncids-tokens
gulp.task('copy-color-settings', () => {
	dutil.logMessage('copy-color-settings', 'Copying NCIDS color settings');

	const stream = gulp
		.src('./scss/settings/_settings-color.scss')
		.pipe(gulp.dest('dist/scss/settings/'));

	return stream;
});
// Places NCIDS font settings inside src package, this points to the updates
// font familes in ncids-tokens
gulp.task('copy-font-settings', () => {
	dutil.logMessage('copy-font-settings', 'Copying NCIDS typography settings');

	const stream = gulp
		.src('./scss/settings/_settings-typography.scss')
		.pipe(gulp.dest('dist/scss/settings/'));

	return stream;
});

// Places NCIDS theme settings inside src package, this includes the systems
// parimary/seconday/base/system color settings
gulp.task('copy-token-settings', () => {
	dutil.logMessage('copy-token-settings', 'Copying NCIDS token settings');

	const stream = gulp
		.src('./scss/core/_system-tokens.scss')
		.pipe(gulp.dest('dist/scss/core/'));

	return stream;
});

gulp.task('copy-dist-sass', () => {
	dutil.logMessage('copy-dist-sass', 'Copying all Sass to dist dir');

	const stream = gulp
		.src('./node_modules/uswds/src/stylesheets/**/*.scss')
		.pipe(gulp.dest('dist/scss'));

	return stream;
});

gulp.task(
	'sass',
	gulp.series('copy-vendor-sass', () => {
		dutil.logMessage(task, 'Compiling Sass');
		const pluginsProcess = [discardComments(), autoprefixer()];
		const pluginsMinify = [csso({ forceMediaMerge: false })];

		return gulp
			.src('./dist/scss/uswds.scss')
			.pipe(sass({ includePaths: ['node_modules'] }))
			.pipe(sourcemaps.init({ largeFile: true }))
			.pipe(
				sass
					.sync({
						outputStyle: 'expanded',
					})
					.on('error', sass.logError)
			)
			.pipe(postcss(pluginsProcess))
			.pipe(replace(/\ncids @version\b/g, `ncids v${pkg.version}`))
			.pipe(rename('ncids.css'))
			.pipe(gulp.dest('dist/css'))
			.pipe(postcss(pluginsMinify))
			.pipe(
				rename({
					suffix: '.min',
				})
			)
			.pipe(sourcemaps.write('.'))
			.pipe(rename('ncids.min.css'))
			.pipe(gulp.dest('dist/css'));
	})
);
