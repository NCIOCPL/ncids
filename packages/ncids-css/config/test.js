const gulp = require('gulp');
const mocha = require('gulp-spawn-mocha');

const mochaConfig = {
	config: '.mocharc.json',
};

gulp.task('test', () =>
	gulp.src('tests/spec/**/*.spec.js').pipe(mocha(mochaConfig))
);

gulp.task('cover', () =>
	gulp.src('tests/spec/**/*.spec.js').pipe(
		mocha(
			mochaConfig,
			Object.assign({
				nyc: true,
			})
		)
	)
);

gulp.task('test:watch', () => {
	gulp.watch('tests/spec/**/*.spec.js', gulp.series('test'));
});
