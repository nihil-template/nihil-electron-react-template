const path = require('path');

module.exports = [
  // Add support for native node modules
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /native_modules\/.+\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false, },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.[tj]sx?/,
    loader: 'babel-loader',
    exclude: path.join(__dirname, 'node_modules'),
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { browsers: [ 'last 2 chrome versions', ], },
          },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
        '@emotion/babel-preset-css-prop',
      ],
      plugins: [ '@emotion', ],
    },
  },
];
