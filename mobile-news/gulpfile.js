var gulp = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');

var paths = {
  scripts: ['./dev/tenxun/js/*'],
  stylus: ['./dev/tenxun/stylus/*','./dev/tenxun/stylus/*','./dev/tenxun/stylus/*']
};


// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
      .pipe(uglify())
    .pipe(gulp.dest('./pro/tenxun/js'));
});
gulp.task('stylus-1', function() {
  return gulp.src(paths.stylus[0])
      .pipe(stylus({compress:true}))  //compress
    .pipe(gulp.dest('./pro/tenxun/css'));
});
gulp.task('stylus-2', function() {
  return gulp.src(paths.stylus[1])
      .pipe(stylus({compress:true}))  //compress
    .pipe(gulp.dest('./pro/tenxun/css'));
});
gulp.task('stylus-3', function() {
  return gulp.src(paths.stylus[2])
      .pipe(stylus({compress:true}))  //compress
    .pipe(gulp.dest('./pro/tenxun/css'));
});
// Rerun the task when a file changes
gulp.task('watch', function() {
   gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.stylus, ['stylus-1','stylus-2','stylus-3']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch','scripts','stylus-1','stylus-2','stylus-3']);