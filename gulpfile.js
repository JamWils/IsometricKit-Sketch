var gulp = require('gulp');
var del = require('del');

var pluginDest = '/Users/james/Library/Containers/com.bohemiancoding.sketch3/Data/Library/Application Support/com.bohemiancoding.sketch3/Plugins/';
var pluginName = 'Isometric Kit.sketchplugin';

gulp.task("Hello", function() {
    console.log("Hello World");
});

gulp.task('installPlugin', ['removePlugin'], function() {
    gulp.src('./' + pluginName + '/**/*', { base: '.'})
    .pipe(gulp.dest(pluginDest));
});

gulp.task('removePlugin', function(done) {
    del(pluginDest + pluginName, { force: true });
    done();
});

gulp.task('watchPlugin', function() {
    gulp.watch('./**/*.*', ['installPlugin']);
});
