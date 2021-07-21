# ncids-css
## Getting Started
In order to download the ncids-css package, you will have to set up the @nciocpl organizational scope in npm to see the package.  Create a .npmrc file in the root of your project containing the following:

```
@nciocpl:registry=https://npm.pkg.github.com
```

Install ncids-react via the command line

```
$ npm install @nciocpl/ncids-css
```

#
## Documentation

This package will build the NCIDS css from the included scss files & the uswds design system scss files. This process adds in our special token palletes, and other overrides into the existing system to fit the NCI brand design.

### Development


####Using NCIDS-CSS

NCIDS uses the Webpack as a way to add USWDS assets to a project and compile our CSS from the package source. 
#

## Build steps

```js
// in root directory
$:  yarn install

// in ncids/packages/ncids-css/
$:  yarn run build

```
