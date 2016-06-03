// import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/vendor.js',
  plugins: [
    // typescript(),
    nodeResolve({
        jsnext: true,
        main: true
      }),
      commonjs({
        // include: ['node_modules/angular/index.js',
        //           'node_modules/angular-aria/index.js',
        //           'node_modules/angular-animate/index.js',
        //           'node_modules/angular-material/index.js',
        //           'node_modules/angular-ui-router/commonjs/ng1.js'
        //          ],
        ignoreGlobal: false,
      }),
      // uglify()
  ],
  format: 'iife',
  // moduleName: 'MyBundle',
  dest: 'assets/vendor.js',
};

