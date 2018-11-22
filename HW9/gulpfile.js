var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require("gulp-sass");
var webpackStream = require('webpack-stream')
const autoprefixer = require('gulp-autoprefixer');

//start server
gulp.task('server', function() {
    gulp.src('public')
      .pipe(server({
        livereload: true,
        open: true,
        port: 4200,
      }));
  });

//webpackSteram
gulp.task('js', function() {
    gulp.src('./app/js/*.js')
      // .pipe(named())
      .pipe(webpackStream({
        output: {
          filename: 'main.min.js'
        }
    }))
    .pipe(gulp.dest('./public/js'));
});

//styles
gulp.task('style', function () {
  gulp.src('app/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/css'))
      .pipe(autoprefixer({
         browsers: ['last 5 version']
    }))
    .pipe(gulp.dest("public/css"));
});

//index
gulp.task('index', function(){
  gulp.src('./app/index.html')
  .pipe(gulp.dest('./public'))
});

//watch
gulp.task('watch', function(){
  gulp.watch("app/scss/**/*.scss", ['style']);
  gulp.watch('./app/js/**/*.js', ['js']);
  // gulp.watch('./app/index.html', ['index']);

})

//default
gulp.task('default', ['server', 'style', 'js', 'watch']);