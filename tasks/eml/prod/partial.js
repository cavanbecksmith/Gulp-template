import config from '../../config.js';
import gulp from 'gulp';
import util from 'gulp-util';
const htmlPartial = require('gulp-html-partial');

gulp.task('html:prod', () => {
    return gulp.src(config.paths.src.root + 'index.html')
        .pipe(htmlPartial({
            basePath: config.paths.src.root + 'partials/'
        }))
        .pipe(gulp.dest(config.paths.builds.tmp.root))
        .on('error', util.log);
});