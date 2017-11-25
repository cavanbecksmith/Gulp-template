import config from '../../config.js';
import gulp from 'gulp';
import server from '../../../servers.json';
var ftp = require('gulp-ftp');

var concat = config.paths.builds.prod.root+'**/*';

console.log(concat);

gulp.task('ftp', () => {
    return gulp.src(concat)
        .pipe(ftp({
            host: server["servers"]["corcavian"]["host"],
            user: server["servers"]["corcavian"]["user"],
            pass: server["servers"]["corcavian"]["pass"],
            remotePath: server["servers"]["corcavian"]["remotePath"]
        }))
        .pipe(gulp.dest(concat))
});

