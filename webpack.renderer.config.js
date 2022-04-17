const path = require('path');
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.(css|scss)/i,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader',
  ],
});

module.exports = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [ '.js', '.ts', '.jsx', '.tsx', '.css', ],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@/components': path.resolve(__dirname, 'src/components/'),
      '@/store': path.resolve(__dirname, 'src/store/'),
      '@/images': path.resolve(__dirname, 'src/images/'),
      '@/styles': path.resolve(__dirname, 'src/styles/'),
      '@/hooks': path.resolve(__dirname, 'src/hooks/'),
      '@/reducers': path.resolve(__dirname, 'src/reducers/'),
      '@/utils': path.resolve(__dirname, 'src/utils/'),
      '@/data': path.resolve(__dirname, 'src/data/'),
      '@/layouts': path.resolve(__dirname, 'src/layouts/'),
      '@/actions': path.resolve(__dirname, 'src/actions/'),
      '@/pages': path.resolve(__dirname, 'src/pages/'),
      '@/types': path.resolve(__dirname, 'src/types/'),
    },
  },
};
