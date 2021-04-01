// Bring in individual Gulp configurations
require('./config/flags');
require('./config/javascript');
require('./config/build');
require('./config/test');

var gulp = require('gulp');
var dutil = require('./config/doc-util');

gulp.task('default', function (done) {
	dutil.logIntroduction();

	dutil.logHelp(
		'gulp',
		'This task will output the currently supported automation tasks. (e.g. This help message.)'
	);

	dutil.logHelp(
		'gulp no-cleanup [ task-name ]',
		'Prefixing tasks with `no-cleanup ` will not remove the distribution directories.'
	);

	dutil.logHelp(
		'gulp no-test [ task-name ]',
		'Prefixing tasks with `no-test` will disable testing and linting for all supported tasks.'
	);

	dutil.logCommand(
		'gulp clean-dist',
		'This task will remove the distribution directories.'
	);

	dutil.logHelp(
		'gulp build',
		'This task is an alias for running `gulp sass javascript images fonts` and is the recommended task to build all assets.'
	);

	dutil.logCommand(
		'gulp javascript',
		'This task will compile all the JavaScript files into distribution directories.'
	);

	dutil.logCommand(
		'gulp test',
		"This task will run `gulp test` and run this repository's unit tests."
	);

	done();
});

gulp.task('watch', function () {
	gulp.watch('scss/**/*.scss', gulp.series('sass')),
		gulp.watch('dist/scss/**/*.scss', gulp.series('sass'));
	return;
});
