// import typescript from 'rollup-plugin-typescript';

// export default {
//   entry: 'src/main.ts',
//   plugins: [
//     typescript()
//   ],
//   format: 'iife',
//   dest: 'todo2.js', // equivalent to --output
//   globals: {
//     angular: 'angular',
//   }
// };

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
