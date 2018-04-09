const path = require('path');
module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve('build'),
    filename: './bundle.js'
  },
  watch: true
}