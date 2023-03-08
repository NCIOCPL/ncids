# ncids-css
## Getting Started
In order to download the ncids-css package, you will have to set up the @nciocpl organizational scope in npm to see the package.  Create a .npmrc file in the root of your project containing the following:

```
@nciocpl:registry=https://npm.pkg.github.com
```

Install ncids-css via the command line

```
$ npm install @nciocpl/ncids-css
```

#
## Documentation

This package will build the NCI Design System(NCIDS) css from the included scss files & the U.S. Web Design System(USWDS) scss files. This process adds in our special token palletes, and other overrides into the existing system to fit the NCI brand design.

### Development

The folder structure for the NCIDS closely resembles that of the USWDS.  This was done to help reduce confusion with future maintenance when syncing with future releases of USWDS.

[More about `/packages`](./scss/core/README.md)


#### Using NCIDS-CSS

NCIDS uses the Webpack as a way to add USWDS assets to a project and compile our CSS from the package source.


