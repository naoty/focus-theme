var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var clean = require("gulp-clean-css");

gulp.task("default", function() {
  return gulp.src("src/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("index.css"))
    .pipe(clean())
    .pipe(gulp.dest("dist/"));
});
