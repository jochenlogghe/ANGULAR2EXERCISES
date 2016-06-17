"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
    webroot: "./public/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";
paths.angular2js = "node_modules/angular2/bundles/**/*.js";
paths.angular2Dest = paths.webroot + "lib/angular2";
paths.rxjsJs = "node_modules/rxjs/bundles/*.js";
paths.rxjsDest = paths.webroot + "lib/rxjs";
paths.systemjsJs = "node_modules/systemjs/dist/*.js";
paths.systemjsDest = paths.webroot + "lib/systemjs";
paths.es6shimJs = "node_modules/es6-shim/es6-shim.min.js";
paths.es6shimDest = paths.webroot + "lib/es6-shim";


gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
      .pipe(concat(paths.concatJsDest))
      .pipe(uglify())
      .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
      .pipe(concat(paths.concatCssDest))
      .pipe(cssmin())
      .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("default", ["angular2", "rxjs", "systemjs", "es6-shim"]);

gulp.task("angular2", function () {
    return gulp.src([paths.angular2js])
    .pipe(gulp.dest(paths.angular2Dest));
});

gulp.task("rxjs", function () {
    return gulp.src([paths.rxjsJs])
    .pipe(gulp.dest(paths.rxjsDest));
});

gulp.task("systemjs", function () {
    return gulp.src([paths.systemjsJs])
    .pipe(gulp.dest(paths.systemjsDest));
});

gulp.task("es6-shim", function () {
    return gulp.src([paths.es6shimJs])
    .pipe(gulp.dest(paths.es6shimDest));
});