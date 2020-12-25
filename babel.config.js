module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        [
          'babel-preset-solid',
          {
            generate: 'dom',
            hydratable: false,
          },
        ],
      ],
    },
  },
};
