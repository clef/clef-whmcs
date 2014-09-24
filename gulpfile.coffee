gulp = require 'gulp'
browserify = require 'gulp-browserify'
sass = require 'gulp-sass'
prefix = require 'gulp-autoprefixer'
spawn = require('child_process').spawn
server = require('tiny-lr')()
livereload = require('gulp-livereload')
rename = require 'gulp-rename'
changed = require 'gulp-changed'
imagemin = require 'gulp-imagemin'
require 'coffeeify'

handleError = (e) ->
  console.log e
  throw new Error

gulp.task 'scss', ->
  gulp.src ['./static/src/scss/**/*.scss']
  .pipe sass()
  .pipe prefix("> 1%")
  .pipe livereload(server)
  .pipe gulp.dest('./static/dist/css')

gulp.task 'browserify', ->
  gulp.src './static/src/coffee/clef.coffee', read: false
    .pipe browserify
      insertGlobals: false
      debug: true
      transform: ['coffeeify']
      extensions: ['.coffee']
    .on 'error', handleError
    .pipe livereload(server)
    .pipe rename('clef.js')
    .pipe gulp.dest('./static/dist/js')

gulp.task 'images', ->
  output = './static/dist/img'
  gulp.src './static/src/img/**/*'
    .pipe changed(output)
    .pipe gulp.dest(output)
    .pipe imagemin()
    .pipe gulp.dest(output)

gulp.task 'watch', ->
  server.listen 35729, ->
    gulp.watch './static/src/scss/**/*.scss', ['scss']
    gulp.watch './static/src/coffee/**/*.coffee', ['browserify']
    gulp.watch './static/src/img/**/*', ['images']

# Default task call every tasks created so far.
gulp.task 'build', ['scss', 'browserify', 'images']
gulp.task 'default', ['build']