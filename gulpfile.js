const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

function buildTS() {
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('dist'));
}

function copyEJS() {
  return gulp.src('src/**/*.ejs').pipe(gulp.dest('dist'));
}

const build = gulp.series(buildTS, gulp.parallel(copyEJS));

exports.default = build;
