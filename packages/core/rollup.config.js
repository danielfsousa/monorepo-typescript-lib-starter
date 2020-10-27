import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

const input = 'src/index.ts'
const external = ['ms']

export default [
  // browser-friendly UMD build
  {
    input,
    output: {
      name: 'core',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true
    },
    plugins: [
      typescript({ declaration: false }),
      resolve(), // so Rollup can find `ms`
      commonjs() // so Rollup can convert `ms` to an ES module
    ]
  },

  // CommonJS (for Node)
  {
    input,
    external,
    output: { format: 'cjs', sourcemap: true, dir: path.dirname(pkg.main) },
    plugins: [typescript({ declaration: false })]
  },

  // ES module (for bundlers) build.
  {
    input,
    external,
    output: { format: 'es', sourcemap: true, dir: path.dirname(pkg.module) },
    plugins: [typescript({ declaration: false })]
  }
]
