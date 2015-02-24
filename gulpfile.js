 var gulp = require('gulp')
gulp.task('default', function () {
//code goes here
console.log('hello world!');
});
 gulp.task('hello:watch', function(){
 gulp.watch('index.html', ['hello']);
});  