import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/main.ts',
  plugins: [
    typescript()
  ],
  format: 'iife',
  dest: 'todo2.js', // equivalent to --output
  globals: {
    angular: 'angular',
  }
};