import { resolve } from 'path';
import typescript from 'rollup-plugin-typescript2';
import svgr from '@svgr/rollup';
import { terser } from "rollup-plugin-terser";

export default {
  input: resolve(__dirname, '..', 'src', 'index.ts'),
  output: {
    format: 'cjs',
    dir: resolve(__dirname, '..', 'dist', 'cjs'),
    sourcemap: true
  },
  plugins: [
    typescript({
      objectHashIgnoreUnknownHack: true,
      tsconfig: resolve(__dirname, 'tsconfig.cjs.json'),
    }),
    svgr(),
    terser()
	],
  external: ['react', 'styled-components']
}
