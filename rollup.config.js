import path from 'path'
import { createConfig, createMinifiedConfig } from './rollup.config.base'

const pkg = require('./package.json')
const name = pkg.name
const input = path.resolve('src/index.ts')
const packageFormats = {
  cjs: {
    file: path.resolve(`dist/${name}.js`),
    format: `cjs`,
  },
}

const packageConfigs = Object.keys(packageFormats).map((format) =>
  createConfig(input, packageFormats[format], [], [])
)
if (process.env.NODE_ENV === 'production') {
  Object.keys(packageFormats).forEach((format) => {
    if (format === 'umd' || format === 'esm') {
      packageConfigs.push(createMinifiedConfig(input, packageFormats[format], [], []))
    }
  })
}

export default packageConfigs
