import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    postcss({
      extract: true,
      modules: true,
      minimize: true,
      plugins: [autoprefixer(), cssnano()],
      use: ['sass'],
    }),
  ],
  external: ['react', 'react-dom', '@chakra-ui/react', 'react-hook-form', '@hookform/resolvers/zod'],
};