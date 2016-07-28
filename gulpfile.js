//gulpfile.js

//importando pacotes node

var gulp = require ('gulp');
var sass = require ('gulp-sass');
var manify = require ('gulp-minify-css');
var autoprefixer = require ('gulp-autoprefixer');
var browserSync = require ('browser-sync');

gulp.task('hello', function(){
   console.log('hello world');
});