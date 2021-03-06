import config from '../../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
import sass from 'gulp-sass'

gulp.task('sass:prod', () => {
    return gulp.src(config.paths.src.sass)
    	.pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.paths.builds.prod.root+'css'))
        .on('error', util.log);
});
