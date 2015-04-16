var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('/data/scss/*.scss')
    .pipe(sass({
      'require': 'susy',
      includePaths: [
        '/app/node_modules/susy/sass'
      ]
    }))
    .pipe(gulp.dest('/data/css'));
});
