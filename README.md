# Typescript Project Test

# Getting Started

## Install node packages

Your project configuration is defined in the Node configuration file 'package.json'. In this file all the required Node packages for this project are defined.
These packages will be installed by the folling CLI command. Open your console and enter:

```bash
> npm install
# the following is only output...
npm WARN typescript-template@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 621 packages from 373 contributors and audited 622 packages in 13.291s

21 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

All installed packages will appear in the node_modules folder. Every time the package.json is updated, this folder can be updated using `npm install`.

## Jest

Jest is used for unit testing your code. You can find an example file with the corresponding test in this repo.

All tests can be started by:

```bash
npm  run test
```

Note: `npm run test` points to a script named 'test' as defined in package.json. In this case it is a shortform for `npx jest`.

Jest allows a TestPathPattern (see help using `npx jest --help`). Examples:

```bash
# run all tests containing the pattern 'example-code'
npm run test example-code

# run all tests containing the pattern 'array-exercise'
npm run test array-exercise

# run all tests ending with test.ts
npm run test *test.ts
```

## Debugging in VSCode

You can also use Jest to debug your code. The config is stored in .vscode/launch.json.

For debugging:

- use the debug tab (Ctrl+Shift+D),
- select the 'Debug Jest Tests' option in the upper left corner, and
- press the green start button this will run all tests in debug mode.

If you want to run a single test open your launch.json file (CTRL+SHIFT+P to open a file) in the .vscode folder and uncomment the filename:

```json
{
...
    "configurations": [
...
        {
...
            "runtimeArgs": [
...
              //"<filename>", // uncomment in case only one test should be started
...
            ],
...
}
```

For more information on how to use jest visit [jestjs.io](https://jestjs.io/docs/en/getting-started)

## ESLint & Prettier

You can use these two basic config files in this repo:

- .eslintrc.js
- .prettierrc

If you want to personalise your config visit the following sites for more information:

- [prettier config](https://prettier.io/docs/en/options.html)
- [eslint config](https://eslint.org/docs/user-guide/configuring)

## Scripts

We added three other scripts in the package.json file.

Two scripts for eslint:

- To check your projekts formating and errors use the comand:

```bash
npm  run lint
```

- And with this second command elsint will fix al autofixable problems:

```bash
npm  run fix
```

And one for typescript:

This command creates a new folder and compiles your projekt files from typescript into plain javascript.

```bash
npm  run build
```

It also clears any previously builded files bevor compiling.

# Resources

- [Mozilla Developer Network - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript tutorials on W3Schools](https://www.w3schools.com/js/default.asp)
- [YouTube: Functional Programming with JavaScript](https://www.youtube.com/watch?v=sCAR8ZPM6ew)
