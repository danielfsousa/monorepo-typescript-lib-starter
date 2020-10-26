# monorepo-typescript-lib-starter

![Build status](https://github.com/danielfsousa/monorepo-typescript-lib-starter/workflows/ci/badge.svg)
[![codecov](https://codecov.io/gh/danielfsousa/monorepo-typescript-lib-starter/branch/main/graph/badge.svg)](https://codecov.io/gh/danielfsousa/monorepo-typescript-lib-starter)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Typedoc reference](https://img.shields.io/badge/typedoc-reference-informational)](https://danielfsousa.github.io/monorepo-typescript-lib-starter/)

Starter kit for monorepo libraries in Typescript.

If you are building a small library and don't want a monorepo checkout: [danielfsousa/typescript-lib-starter](https://github.com/danielfsousa/typescript-lib-starter)

## Usage

Click on the `Use this template` button on github or clone the repository and remove the `.git` folder:

```bash
git clone https://github.com/danielfsousa/monorepo-typescript-lib-starter --depth 1
cd monorepo-typescript-lib-starter
rm -rf .git
```

## Features

- [lerna]() for managing a monorepo
- [RollupJS]() for multiple [optimized bundles](https://2ality.com/2017/04/setting-up-multi-platform-packages.html) with tree shaking for UMD (browsers), CommonJS (Node.js) and ES Modules (module bundlers)
- Automatic types (\*.d.ts) file generation
- Tests and coverage report generation using [Jest]()
- [ESlint]() with [standard]() style for linting typescript and javascript files
- [Prettier]() for code formatting
- Automatic documentation generation with [TypeDoc]() and deployment to [Github Pages]()
- Pre-commit hooks with [husky]() and [lint-staged]() for linting, code formatting, unit tests and commit message validation
- [Coveralls]() for consuming coverage reports
- [Dependabot]() for automatic dependencies updates
- Automatic releases and changelog, using [Semantic release](), [Commitizen]() and [Conventional changelog]()
- CI/CD with [Github Workflows]()
- Pre-created examples for a [CLI app]() and an isomorphic [core library]() that runs on browsers, [Node.js]() and [Deno]()

## Scripts

Execute the scripts from the root directory to run for all packages or inside a package folder to run only for that project.

- `npm run bootstrap` Syslink packages and binaries
- `npm run clean` Remove generated code, typings and caches
- `npm run commit` Commit using conventional commit style
- `npm run docs` Generate and open documentation
- `npm run format` Format code using prettier
- `npm run format:check` Check if code is following the prettier style
- `npm run lint` Lints code
- `npm run lint:fix` Lints and tries to fix linting errors
- `npm run publish` Bump version based on the commits messages, edit the CHANGELOG file and publish a new release to npm and github
- `npm run test` Run test suite and generate coverage report
- `npm run test:watch` Run test suite in interactive watch mode
- `npm run watch` Run build script in watch mode

## Git hooks

- `pre-commit`: Lints, check your code style and runs associated unit tests for every staged file
- `commit-msg`: Check if your commit message follows the Conventional Commits specification before every commit (you can run `npm run commit` to help you create a good commit message)

## Credits

- [alexjoverm/typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter)
- [SatadruBhattacharjee/monorepo-typescript-library-starter](https://github.com/SatadruBhattacharjee/monorepo-typescript-library-starter/)
- [entria/entria-fullstack](https://github.com/entria/entria-fullstack)
