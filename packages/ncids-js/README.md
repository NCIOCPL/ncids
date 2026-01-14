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

## Contributing

Guiding principles, style guides, and contributing instructions are found in the [Github Wiki](https://github.com/NCIOCPL/ncids/wiki/Technical-JS-Component-Design-Overview).

Also see [The Way](https://github.com/NCIOCPL/ncids/wiki/The-Way) for more information.

---

### Building

Compiles TypeScript into JavaScript and bundles for CDN/browser usage.

```shell
$ npm run build
```

Under the hood:
* `tsc -b tsconfig.json` outputs ES modules to `./lib/esm/`
* `tsc -b tsconfig-cjs.json` outputs CommonJS modules to `./lib/cjs/`
* `rollup -c` bundles into:
   * `dist/ncids.min.js` for use in `<script>` tags (UMD/global)
   * `dist/ncids-minimal.min.js` for a minimal bundle (subset of features)
   * `dist/ncids-full.min.js` for the full bundle (all features)

---

### Testing

Tests are built with [`@testing-library/jest-dom`](https://testing-library.com/docs/ecosystem-jest-dom/).

```shell
$ npm run test
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
$ npm run lint
```
