/**
 * Created by Lucien on 2016/9/16.
 */
var gulp,concat,minifyCss,rename,uglify,runSequence,minifyHTML,minifyIMAGE,sass,autoprefix,path,ngFilesort,ngAnnotate,
    distDir,sassDir,jsDir,neededlibDir,htmlDir,libDir,imgDir;
gulp = require('gulp');

concat = require('gulp-concat');

minifyCss = require('gulp-minify-css');

rename = require('gulp-rename');

uglify = require('gulp-uglify');

runSequence = require('run-sequence');

minifyHTML = require('gulp-minify-html');

minifyIMAGE = require('gulp-imagemin');

sass = require('gulp-sass');

autoprefix = require('gulp-autoprefixer');

path = require('path');

ngFilesort = require('gulp-angular-filesort');

ngAnnotate = require('gulp-ng-annotate');


distDir = './topic/dist/';

sassDir = 'topic/src/**/*.scss';

jsDir = [ 'topic/src/app/**/*.js', 'topic/src/common/**/*.js', 'topic/src/*.js',  'topic/src/app/**/*.js'];

neededlibDir = ['topic/src/lib/angular.js', 'topic/src/lib/angular-ui-router.js'];

htmlDir = 'topic/src/*.html';

libDir = 'topic/src/lib/**/*.*';

imgDir = 'topic/img/**/*.*';


handleError = function (err) {
    console.log(err.toString());
    return this.emit('end');
};

gulp.task('dist:sass', function () {
    return gulp.src('topic/src/*.scss').pipe(sass()).on('error', handleError).pipe(autoprefix({
        browsers: ['FireFox <= 20', 'last 2 versions']
    })).pipe(rename({
        basename: 'index.min'
    })).pipe(gulp.dest(distDir+'css/'));
});

gulp.task('dist:js', function () {
    return gulp.src(jsDir) //.pipe(gulp.dest('dist/js/'))
        .pipe(ngFilesort())
        .pipe(concat('index.js'))
        .pipe(ngAnnotate())
        .pipe(rename({
        basename: 'index.min'
    })).pipe(gulp.dest(distDir+'js/'));
});

gulp.task('dist:lib.js', function () {
    return gulp.src(neededlibDir)
        .pipe(concat('lib.js'))
        .pipe(ngAnnotate())
        .pipe(rename({
        basename: 'lib.min'
    })).pipe(gulp.dest(distDir+'js/'));
});

gulp.task('dist:img', function () {
    return gulp.src(imgDir)
        .pipe(gulp.dest(distDir+'/img'));
});


gulp.task('dist:html', function () {
    return gulp.src(htmlDir).pipe(gulp.dest(distDir));
});

gulp.task('dist:lib', function () {
    return gulp.src(libDir).pipe(gulp.dest(distDir+'lib/'));
});

gulp.task('watch', function () {
    gulp.watch(sassDir, ['dist:sass']);

    gulp.watch(jsDir,['dist:js']);

     gulp.watch(htmlDir, ['dist:html']);

    gulp.watch(imgDir,['dist:img']);
});

gulp.task('minHtml', function () {
   return  gulp.src(['dist/**/*.html'], {
        base: 'dist/'
    }).pipe(minifyHTML()).pipe(gulp.dest(distDir));
});

gulp.task('minJs', function () {
    return gulp.src(['dist/js/*.min.js'], {
        base: 'dist/'
    }).pipe(uglify()).pipe(gulp.dest(distDir));
});

gulp.task('minImg', function () {
    return gulp.src('dist/img/**/*.*', {
        base: 'dist/'
    }).pipe(minifyIMAGE({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest(distDir));
});

gulp.task('dist', function (cb) {
    return runSequence('dist:sass', 'dist:lib.js','dist:img', 'dist:js',  'dist:html', 'dist:lib', cb);
});

gulp.task('default', function (cb) {
    return runSequence('dist', 'watch', cb);
});


