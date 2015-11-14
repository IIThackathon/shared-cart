var gulp 	= require('gulp'),
    nodemon = require('gulp-nodemon'),
    iife = require('gulp-iife');


gulp.task('default',function(){
    nodemon({
        script:'app.js',
        ext:'js',
        env:{
            PORT:5000,
            ENV:"developement"
        },
        ignore:['./node_modules/**']
    })
        .on('restart',function(){
            console.log('restarting...')
        });
    return gulp.src(['public/controllers/**/*.js','public/directives/**/*.js','public/services/**/*.js'])
        .pipe(iife({
            prependSemicolon: false
        }))
        .pipe(gulp.dest("dist"));
});