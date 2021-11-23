# `ncids-js`

> JS library for the National Cancer Institute Design System

## Usage

1. Install packages `yarn install`
2. Create `dist` by running `yarn build`
3. Import components
   - **Recommended**: Import each component individually with `import { <COMPONENT> } from '@nciocpl/ncids-js/src/components/<COMPONENT>';`
   - Not recommended: Import bundled javascript in your template `<script src="./dist/bundle.js"></script>`

## Create new component

1. For each component, create a new directory using the BEM block name, following rules from [The Way](https://github.com/NCIOCPL/ncids/wiki/The-Way)
2. For each variant, create a new `<variant>.js`
3. Create an `all.js` file with its BEM block name containing exports for entire component module for bulk import
4. Update `src/index.js` with entire component module for bulk import

## Tests

1. Run `yarn test`
2. This will look for any `<COMPONENT>.test.js` files located in `__tests__` directories.
3. Every component should have basic unit tests built with [Jest](https://jestjs.io/)

Example

```
ncids-js
└─── src
│   │   index.js // bulk import all js
│   └─── components
│       └─── usa-header
│           │   all.js // bulk import all header
│           │   basic.js // imports and default export needed for basic
│           │   basic-mega.js // imports and default export needed for basic-mega
│           │   extended.js // imports and default export needed for extended
│           │   extended-mega.js // imports and default export needed for extended-mega
│           └─── internal
│               │   shared.js // js used for all usa-header
|               |   basic.js // js used for basic
|               |   basic-mega.js // js used for basic-mega
|               |   extended.js // js used for extended
|               |   extended-mega.js // js used for extended-mega
│       └─── usa-footer
│           │   all.js // bulk import all footer
│           │   slim.js // imports and default export for slim
│           │   medium.js // imports and default export for medium
│           │   big.js // imports and default export for big
│           │   nci-big.js // imports and default export for nci-big
│           └─── internal
│               │   shared.js // js used for all usa-footer
|               |   slim.js // js used for slim
|               |   medium.js // js used for medium
|               |   big.js // js used for big
|               |   nci-big.js // js used for nci-big
```

