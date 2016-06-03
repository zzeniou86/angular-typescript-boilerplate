var typescript = require('rollup-plugin-typescript')

module.exports = {
  entry: 'main.ts',
  plugins: [typescript()],
  format: 'iife',
  dest: 'app.js', // equivalent to --output
  globals: {
    angular: 'angular',
  }
}