# ncids-css

## JS package for the NCIDS

This package will build the NCIDS JS from the included JavaScript files & the uswds design system JS files. This process adds in our special functionality and other overrides into the existing system to fit the NCI brand design.

### Process

The gulp build file first moves over the JS into the dist folder, fonts and image assets from the uswds pacakge into the NCIDS directory under `ncids-js/dist/`. This is so the partials can be read and imported by Drupal or other content managment systems, allowing them to take what they need and not bloat their CSS files.

```css
src/
├── js/
│   └── ncids_specific.js
│
└── lib/
    ├── components/
    ├── polyfills/
    ├── utils/
    ├── config.js
    ├── events.js
    ├── start.js
    └── uswds-int.js

```
The guld script then points to this new directory to continue the build process and outputs the ncids js files.

```css
dist/
└── js/
    ├── ncids-js.js
    ├── ncids-js.min.js
    ├── ncids-js.min.js.map
    │   
    ├── ncids-initjs
    ├── ncids-init.min.js
    └── ncids-init.min.js.map

#

## Build steps

```js
// in root directory
$:  yarn install

// in ncids/packages/ncids-css/
$:  yarn run build

```
