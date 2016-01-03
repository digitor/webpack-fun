var gulp = require("gulp")
  , babel = require("gulp-babel")
  , webpack = require("gulp-webpack")
  , webpackCnf = require("./webpack-config.js");

  gulp.task("webpack-test", function() {

  	return gulp.src("src/app.js")
  		.pipe(webpack(webpackCnf))
  		.pipe(gulp.dest("dist/"))
  });

  gulp.task("babel-test", function() {

  	return gulp.src("src/**/*.js")
  		.pipe(babel())
  		.pipe(gulp.dest("dist/"))
  });