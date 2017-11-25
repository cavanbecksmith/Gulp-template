
import gulp from 'gulp';
import sequence from 'run-sequence';
import requireDir from 'require-dir';
import project from './project.js';

requireDir('./tasks/'+project+'/prod');
requireDir('./tasks/'+project+'/dev');

/*
=============================
Gulp - Default
-----------------------------
*/

gulp.task('default', () =>{});

gulp.task('dev', () =>{
   gulp.start(project); 
});

gulp.task('build', () =>{
   gulp.start(project+':build'); 
});

/*
=============================
ADV - Template
-----------------------------
*/


gulp.task('adv', () => {
    sequence('clean:dev',
        [
            // 'audio:dev',
            'libs:dev',
            'sass:dev',
            'css:dev',
            'data:dev',
            'img:dev',
            'js:dev',
            'html:dev',
            'mani:dev'
        ],
        'watch',
        'serve'
    );
});


gulp.task('adv:build', () => {
    sequence('clean:prod',
        [
            // 'audio:prod',
            'libs:prod',
            'sass:prod',
            'css:prod',
            'data:prod',
            'img:prod',
            'js:prod'
        ],
        'html:prod',
        'rev:prod'
    );
});


/*
=============================
Codepen - Template
-----------------------------
*/

gulp.task('codepen', () => {
    sequence('clean:dev',
        [
            'libs:dev',
            'sass:dev',
            'css:dev',
            'data:dev',
            'img:dev',
            // 'js:dev',
            'webpack:dev',
            'html:dev',
            'mani:dev'
        ],
        'watch',
        'serve'
    );
});

gulp.task('codepen:build', () => {
    sequence('clean:prod',
        [
            // 'audio:prod',
            'libs:prod',
            'sass:prod',
            'css:prod',
            'data:prod',
            'img:prod',
            // 'js:prod'
            'webpack:prod'
        ],
        'html:prod',
        'rev:prod'
    );
});



/*
=============================
Webpack - Template
-----------------------------
*/

gulp.task('webpack', () => {
    sequence('clean:dev',
        [
            'libs:dev',
            'sass:dev',
            'css:dev',
            'data:dev',
            'img:dev',
            // 'js:dev',
            'webpack:dev',
            'html:dev',
            'mani:dev'
        ],
        'watch',
        'serve'
    );
});

gulp.task('webpack:build', () => {
    sequence('clean:prod',
        [
            // 'audio:prod',
            'libs:prod',
            'sass:prod',
            'css:prod',
            'data:prod',
            'img:prod',
            // 'js:prod'
            'webpack:prod'
        ],
        'html:prod',
        'rev:prod'
    );
});


/*
=============================
Vue - Template
-----------------------------
*/

gulp.task('vue', () => {
    sequence('clean:dev',
        [
            'libs:dev',
            'sass:dev',
            'css:dev',
            'data:dev',
            'img:dev',
            // 'js:dev',
            'webpack:dev',
            'html:dev',
            'mani:dev'
        ],
        'watch',
        'serve'
    );
});

gulp.task('vue:build', () => {
    sequence('clean:prod',
        [
            // 'audio:prod',
            'libs:prod',
            'sass:prod',
            'css:prod',
            // 'data:prod',
            'img:prod',
            // 'js:prod'
            'webpack:prod',
        ],
        'html:prod',
        'rev:prod',
        'tsjson:prod',
        'zip'
    );
});



/*
=============================
Eml - Template
-----------------------------
*/

gulp.task('eml', () => {
    sequence('clean:dev',
        [
            'sass:dev',
            'css:dev',
            'img:dev',
            'html:dev',
        ],
        'watch',
        'serve'
    );
});

gulp.task('eml:build', () => {
    sequence(
        // 'clean:prod',
        [
            'sass:prod',
            'css:prod',
            'img:prod',
        ],
        'ftp',
        'html:prod',
        'rev:prod'
    );
});



/*
=============================
Pixi - Template
-----------------------------
*/

gulp.task('pixi', () => {
    sequence('clean:dev',
        [
            'libs:dev',
            'sass:dev',
            'css:dev',
            'data:dev',
            'img:dev',
            // 'js:dev',
            'webpack:dev',
            'html:dev',
            'mani:dev'
        ],
        'watch',
        'serve'
    );
});

gulp.task('pixi:build', () => {
    sequence('clean:prod',
        [
            // 'audio:prod',
            'libs:prod',
            'sass:prod',
            'css:prod',
            // 'data:prod',
            'img:prod',
            // 'js:prod'
            'webpack:prod',
        ],
        'html:prod',
        'rev:prod',
        'tsjson:prod',
        'zip'
    );
});



/*
=============================
Clean - Tools
-----------------------------
*/

gulp.task('clean', () => {
    sequence('clean:prod',
        'clean:dev'
    );
});



export default project;