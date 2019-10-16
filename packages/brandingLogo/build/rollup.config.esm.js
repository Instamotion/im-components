import { resolve } from 'path';
import typescript from 'rollup-plugin-typescript2';
import svgr from '@svgr/rollup';
import { terser } from "rollup-plugin-terser";

export default {
  input: resolve(__dirname, '..', 'src', 'index.ts'),
  output: {
    format: 'esm',
    dir: resolve(__dirname, '..', 'dist', 'esm'),
    sourcemap: true
  },
	plugins: [
    typescript({
      objectHashIgnoreUnknownHack: true,
      tsconfig: resolve(__dirname, 'tsconfig.esm.json'),
    }),
    svgr(),
    terser()
  ],
  external: ['react', 'styled-components']
}
