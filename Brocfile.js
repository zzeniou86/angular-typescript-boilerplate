var pickFiles = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')
var rollup = require('broccoli-rollup');
var rollupConfig = require('./rollup.config.js')
var typescript = require('rollup-plugin-typescript')
var compileSas = require('broccoli-sass');
// var TSLint = require('broccoli-tslinter');
var broccoliSource = require('broccoli-source');
var WatchedDir = broccoliSource.WatchedDir;
var UnwatchedDir = broccoliSource.UnwatchedDir;


// function to get the filename from the filepath
function getFilename(str) {
  return str.replace(/^.*(\\|\/|\:)/, '');
}

// the src file to watch
var app = 'src'

// HTML FILES
var htmlFiles = pickFiles(app, {
  srcDir: '/',
  include: ['**/*.html'],
  // destDir: 'views', // move under views namespace
  getDestinationPath: function(relativePath) {
    relativePath = getFilename(relativePath);
    if (relativePath !== 'index.html') {
      relativePath = 'views/' + relativePath;
    }
    console.log(relativePath);

    return relativePath;
  }
})

// TYPESCRIPT FILES
var tsFiles = pickFiles(app, {
  srcDir: '/',
  include: ['**/*.ts'],
})

// var tsFiles = new TSLint(tsFiles);

tsFiles = rollup(tsFiles, {
  inputFiles: ['**/*.ts'],
  rollup: rollupConfig
})

// SASS FILES
var cssFiles = pickFiles(app, {
  srcDir: '/',
  include: ['**/*+(.scss|css)'],
  exclude: ['assets/styles/*', 'vendor.scss']
})
cssFiles = new compileSas([cssFiles], 'public/app.scss', 'app.css')

// VENDOR:
// SCC+CSS Files
// var vendorCssFiles = mergeTrees([
//   pickFiles(new UnwatchedDir('src'), { include: ['vendor2.scss']}),
//   pickFiles(new UnwatchedDir('node_modules/angular'), { include: ['angular-csp.css']}),
//   pickFiles(new UnwatchedDir('node_modules/angular-material'), { include: ['angular-material.css']}),
// ])
// vendorCssFiles = new compileSas([vendorCssFiles], 'vendor2.scss', 'vendor.css')

// VENDOR:
// SCC+CSS Files
var vendorCssFiles = [];
var vendorCssArr = require('./configs/brocfile-vendor-css.js');
vendorCssArr.forEach(function(entry) {
  node = pickFiles(new UnwatchedDir(entry.dir), { include: entry.files });
  vendorCssFiles.push(node);
})
var vendorCssFiles = mergeTrees(vendorCssFiles);
vendorCssFiles = new compileSas([vendorCssFiles], 'vendor.scss', 'vendor.css')

//VENDOR:
//JS FILES
var vendorFiles = new UnwatchedDir('assets');


module.exports = mergeTrees([htmlFiles, tsFiles, vendorFiles, cssFiles, vendorCssFiles])

// // print process.argv
// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });