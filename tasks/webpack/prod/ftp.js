import config from '../../config.js';
import gulp from 'gulp';
import server from '../../../servers.json';
var ftp = require('gulp-ftp');

var concat = config.paths.builds.prod.root+'**/*';

console.log(concat);

gulp.task('ftp', () => {
    return gulp.src(concat)
        .pipe(ftp({
            host: server["servers"]["portfolio"]["host"],
            user: server["servers"]["portfolio"]["user"],
            pass: server["servers"]["portfolio"]["pass"],
            remotePath: server["servers"]["portfolio"]["remotePath"]
        }))
        .pipe(gulp.dest(concat))
});

