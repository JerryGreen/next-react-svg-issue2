# Step to reproduce

```bash
git clone git@github.com:JerryGreen/next-react-svg-issue2.git
cd next-react-svg-issue2
yarn
yarn build
```

You'll get this error:

```bash
yarn run v1.15.2
$ next build
Creating an optimized production build ...

Failed to compile.

./assets/shape.svg 1:0
Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
| <path fill-rule="evenodd" clip-rule="evenodd" d="M9 15.72L7.88 14.6C3.72 10.92 1 8.44 1 5.4C1 2.92 2.92 1 5.4 1C6.76 1 8.12 1.64 9 2.68C9.88 1.64 11.24 1 12.6 1C15.08 1 17 2.92 17 5.4C17 8.44 14.28 10.92 10.12 14.6L9 15.72V15.72Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
| </svg>

> Build error occurred
Error: > Build failed because of webpack errors
    at build (/Users/jerrygreen/projects/next-react-svg-issue2/node_modules/next/dist/build/index.js:7:847)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
