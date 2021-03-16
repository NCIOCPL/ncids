const gulp = require('gulp');
const dutil = require('./doc-util');

const task = 'fonts';

gulp.task(task, (done) => {
	dutil.logMessage(task, 'Copying Fonts');
	const stream = gulp
		.src('./node_modules/uswds/src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	done();
	return stream;
});
