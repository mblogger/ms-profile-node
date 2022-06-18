/**
 * Script: gulpfile
 * Used to clean, build, delete, minify, and watch
 * styles and scripts for the profile application
 */

// Global imports
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass')(require('sass'));

// Global declarations
var paths = {
  styles: {
    src: 'views/src/sass/**/*.scss',
    dest: 'views/assets/css/'
  },
  scripts: {
    src: 'views/src/js/**/*.js',
    dest: 'views/assets/js/'
  }
}
/**
 * Build style for profile application and 
 * minify/uglify at the same time
 */
function styles() {
  return gulp
  .src(paths.styles.src)
  .pipe(sass().on('error', sass.logError))
  // .pipe(cleanCSS())
  .pipe(gulp.dest(paths.styles.dest));
}

/**
 * Build scripts for profile application and 
 * babelify/uglify at the same time
 */
function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
}

var build = gulp.parallel(styles, scripts); 
exports.default = gulp.series(build, watch)