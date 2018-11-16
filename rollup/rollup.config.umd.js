import { uglify } from 'rollup-plugin-uglify';
import pkg from '../package.json';

import config, { plugins } from './rollup.config.common';

export default Object.assign(config, {
  output: [
    {
      name: 'ReactFlexybox',
      file: pkg.browser,
      format: 'umd',
    },
  ],
  plugins: plugins.concat([
    uglify({}),
  ]),
});
