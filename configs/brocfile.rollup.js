var vendorCssFiles = mergeTrees([
  pickFiles(new UnwatchedDir('src'), { include: ['vendor2.scss']}),
  pickFiles(new UnwatchedDir('node_modules/angular'), { include: ['angular-csp.css']}),
  pickFiles(new UnwatchedDir('node_modules/angular-material'), { include: ['angular-material.css']}),
])
module.exports = new compileSas([vendorCssFiles], 'vendor2.scss', 'vendor.css')
