//
// Gulpfile
//

"use strict";

const gulp                   = require('gulp');
const sass                   = require('gulp-sass');
const changed                = require('gulp-changed');
const autoprefixer           = require('gulp-autoprefixer');
const rename                 = require('gulp-rename');
const del                    = require('del');
const concat                 = require('gulp-concat');
const cssnano                = require('gulp-cssnano');
const uglify                 = require('gulp-uglifyjs');
const cache                  = require('gulp-cache');
const imagemin               = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant               = require('imagemin-pngquant');
const browsersync            = require('browser-sync').create();



//
// Gulp plumber error handler - displays if any error occurs during the process on your command
//

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}



//
// SASS - Compile SASS files into CSS
//

function scss() {
  return gulp
    .src('./assets/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('./assets/css/'))
    .on('error', sass.logError)
    .pipe(autoprefixer([
        "last 1 major version",
        ">= 1%",
        "Chrome >= 45",
        "Firefox >= 38",
        "Edge >= 12",
        "Explorer >= 10",
        "iOS >= 9",
        "Safari >= 9",
        "Android >= 4.4",
        "Opera >= 30"], { cascade: true }))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browsersync.stream());
}



//
// BrowserSync (live reload) - keeps multiple browsers & devices in sync when building websites
//

function browserSync(done) {
  browsersync.init({
    files: "./*.html",
    startPath: "./html/home/",
    server: {
      baseDir: "./",
      routes: {},
      middleware: function (req, res, next) {
        if (/\.json|\.txt|\.html/.test(req.url) && req.method.toUpperCase() == 'POST') {
          console.log('[POST => GET] : ' + req.url);
          req.method = 'GET';
        }
        next();
      }
    }
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}



//
// Gulp Watch and Tasks
//

function watch() {
  gulp.watch('./assets/scss/**/*.scss', scss);
  gulp.watch(
    [
      './html/**/*.html',
      './starter/**/*.html',
      './documentation/**/*.html'
    ],
    gulp.series(browserSyncReload)
  );
}

// Gulp Tasks
gulp.task('default', gulp.parallel(watch, scss, browserSync));



//
// CSS minifier - merges and minifies the below given list of Space libraries into one theme.min.css
//

function minCSS() {
  return gulp
    .src([
      './assets/css/theme.css',
    ])
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/assets/css/'));
}



//
// JavaSript minifier - merges and minifies the below given list of Space libraries into one theme.min.js
//

function minJS() {
  return gulp
    .src([
      './assets/js/hs.core.js',

      './assets/js/components/hs.clipboard.js',
      './assets/js/components/hs.countdown.js',
      './assets/js/components/hs.counter.js',
      './assets/js/components/hs.cubeportfolio.js',
      './assets/js/components/hs.fancybox.js',
      './assets/js/components/hs.g-map.js',
      './assets/js/components/hs.go-to.js',
      './assets/js/components/hs.header.js',
      './assets/js/components/hs.instagram.js',
      './assets/js/components/hs.malihu-scrollbar.js',
      './assets/js/components/hs.modal-window.js',
      './assets/js/components/hs.onscroll-animation.js',
      './assets/js/components/hs.progress-bar.js',
      './assets/js/components/hs.quantity-counter.js',
      './assets/js/components/hs.range-datepicker.js',
      './assets/js/components/hs.scroll-nav.js',
      './assets/js/components/hs.show-animation.js',
      './assets/js/components/hs.slick-carousel.js',
      './assets/js/components/hs.step-form.js',
      './assets/js/components/hs.sticky-block.js',
      './assets/js/components/hs.strings-unifier.js',
      './assets/js/components/hs.unfold.js',
      './assets/js/components/hs.validation.js',
      './assets/js/components/hs.video-player.js',
      './assets/js/components/hs.wizard.js',

      './assets/js/helpers/hs.bg-video.js',
      './assets/js/helpers/hs.focus-state.js',

      './assets/js/theme-custom.js',
    ])
    .pipe(concat('theme.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js/'));
}


//
// Image minifier - compresses images
//

function minIMG() {
  return gulp
    .src('./assets/img/**/*')
    .pipe(cache(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imageminJpegRecompress({
        loops: 5,
        min: 65,
        max: 70,
        quality:'medium'
      }),
      imagemin.svgo(),
      imagemin.optipng({optimizationLevel: 3}),
      pngquant({quality: '65-70', speed: 5})
    ],{
      verbose: true
    })))
    .pipe(gulp.dest('./dist/assets/img/'));
}



//
// Copy Vendors - a utility to copy client-side dependencies into a folder
//

function copyVendors() {
  return gulp
    .src([
      './node_modules/*animate.css/**/*',
      './node_modules/*bootstrap-select/**/*',
      './node_modules/*chartist/**/*',
      './node_modules/*custombox/**/*',
      './node_modules/*clipboard/**/*',
      './node_modules/*datatables/**/*',
      './node_modules/*flag-icon-css/**/*',
      './node_modules/*flatpickr/**/*',
      './node_modules/*gmaps/**/*',
      './node_modules/*instafeed.js/**/*',
      './node_modules/*ion-rangeslider/**/*',
      './node_modules/*jquery/**/*',
      './node_modules/*jquery-migrate/**/*',
      './node_modules/*jquery-validation/**/*',
      './node_modules/*popper.js/**/*',
      './node_modules/*summernote/**/*',
      './node_modules/*svg-injector/**/*',
      './node_modules/*typed.js/**/*',
    ])
    .pipe(gulp.dest('./dist/assets/vendor/'))
};

gulp.task('minCSS', minCSS);
gulp.task('minJS', minJS);
gulp.task('minIMG', minIMG);
gulp.task('copyVendors', copyVendors);
gulp.task('dist', gulp.series(copyVendors, minCSS, minJS, minIMG));