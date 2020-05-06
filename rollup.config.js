import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';

const external = ['solid-js', 'solid-js/dom', 'history', 'path-to-regexp'];
const extensions = ['.ts', '.tsx'];

const configs = [
  {
    input: 'src/client.ts',
    output: [
      {
        name: 'solid-router',
        file: 'dist/dom/index.cjs.js',
        format: 'cjs',
      },
      {
        name: 'solid-router',
        file: 'dist/dom/index.esm.js',
        format: 'esm',
      },
    ],
    solid: {
      generate: 'dom',
      hydratable: false,
    },
  },
  {
    input: 'src/client.ts',
    output: [
      {
        name: 'solid-router',
        file: 'dist/hydrate/index.cjs.js',
        format: 'cjs',
      },
      {
        name: 'solid-router',
        file: 'dist/hydrate/index.esm.js',
        format: 'esm',
      },
    ],
    solid: {
      generate: 'dom',
      hydratable: true,
    },
  },
  {
    input: 'src/server.ts',
    output: [
      {
        name: 'solid-router',
        file: 'dist/server/index.cjs.js',
        format: 'cjs',
      },
      {
        name: 'solid-router',
        file: 'dist/server/index.esm.js',
        format: 'esm',
      },
    ],
    solid: {
      generate: 'ssr',
      hydratable: true,
    },
  },
];

const finalConfigs = configs.map((config) => {
  return {
    input: config.input,
    output: config.output,
    external,
    plugins: [
      babel({
        extensions,
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-typescript'],
          ['babel-preset-solid', config.solid],
        ],
      }),
      resolve({
        extensions,
      }),
      commonjs(),
      filesize(),
    ],
  };
});

export default finalConfigs;
