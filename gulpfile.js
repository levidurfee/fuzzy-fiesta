gulp = require('gulp');
babel = require('gulp-babel');
minify = require('gulp-minify');

gulp.task('babel', function() {
  return gulp.src('js/Fuzzy.js')
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest('js/build'));
});

gulp.task('minify', ['babel'], function() {
  gulp.src('js/build/Fuzzy.js')
    .pipe(minify({
      ext: {
        min: '.min.js'
      }
    }))
    .pipe(gulp.dest('js/build'));
});

gulp.task('watch', function() {
  gulp.watch('js/Fuzzy.js', ['babel', 'minify']);
});

gulp.task('default', ['babel', 'minify']);
