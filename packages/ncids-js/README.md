# `@nciocpl/ncids-js`

> JS library for the National Cancer Institute Design System

## Installation

### `yarn`

```shell
$ yarn add @nciocpl/ncids-js
```

### `npm`

```shell
$ npm install @nciocpl/ncids-js
```

## Usage

### .ts
todo

### .js
todo

### Webpack
todo

### etc
tood

## Contributing

Guiding principles, style guides, and contributing instructions are found in the [Github Wiki](https://github.com/NCIOCPL/ncids/wiki/Technical-JS-Component-Design-Overview).

Also see [The Way](https://github.com/NCIOCPL/ncids/wiki/The-Way) for more information.

---

### Building

Compiles TypeScript into JavaScript.

```shell
$ yarn build
```

Under the hood:
* Runs TypeScript compiler `tsc -p tsconfig.json` to output ES modules in `./lib/esm/`
* Runs `tsc -p tsconfig-cjs.json` to output CommonJS code `./lib/cjs/`
* Attempts to fix any linting errors with outputted files with `eslint lib --fix`
* Transpiles javascript for older browsers to `./dist/` with `rollup --config` via RollupJS and Babel

---

### Testing

Tests are built with [`@testing-library/jest-dom`](https://testing-library.com/docs/ecosystem-jest-dom/).

```shell
$ yarn test
```

Tests should live in a `__tests__` directory and expects a file name that matches `**/?(*.)+(test).[jt]s?(x)`. I.e.:
* `../__tests__/filename.test.ts`

Tests expect consistent `it` usages within a `describe` scope.
```javascript
describe('foo', () => {
  it('bar', () => {
    expect(screen.getbyRole('foobar'));
  });
});
```

---

### Linting

ESlint rules should follow standards described in [`@nciocpl/eslint-config-vanilla-js`](https://github.com/NCIOCPL/cgov-standards-xt/tree/develop/packages/eslint-config-vanilla-js)

```shell
$ yarn lint
```
