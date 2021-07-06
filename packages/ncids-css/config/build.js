const gulp = require('gulp');
const del = require('del');
const dutil = require('./doc-util');
const cFlags = require('./cflags');

gulp.task('clean-dist', (done) => {
	if (!cFlags.cleanup) {
		dutil.logMessage(
			'clean-dist',
			'Skipping cleaning up the distribution directories.'
		);
		return done();
	}
	dutil.logMessage('clean-dist', 'Removing distribution directories.');

	return del('dist');
});

gulp.task(
	'build',
	gulp.series(
		(done) => {
			dutil.logIntroduction();
			dutil.logMessage('build', 'Creating distribution directories.');
			done();
		},
		'clean-dist',
		// We need to copy the Sass to dist and then overlay
		// our tokens and settings ontop
		'copy-dist-sass',
		'copy-color-settings',
		'copy-font-settings',
		'copy-color-tokens',
		// compile sass from the new location
		// then copy over fonts/images
		'svg-sprite',
		gulp.parallel('sass', 'images', 'fonts')
	)
);
