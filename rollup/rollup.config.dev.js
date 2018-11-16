import config, { plugins } from './rollup.config.common';
import pkg from '../package.json';

export default Object.assign(config, {
  output: {
    name: 'ReactFlexybox',
    file: `dist/${pkg.name}.dev.js`,
    format: 'umd',
  },
  plugins: plugins.concat([
    // add additional plugins here
  ]),
});
