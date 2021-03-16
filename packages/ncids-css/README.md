# ncids-css

## SASS/CSS package for the NCIDS

This package will build the NCIDS css from the included scss files & the uswds design system scss files. This process adds in our special token pallets, and other overrides into the existing system to fit the NCI brand design.

### Process

The gulp build file first moves over the SCSS, fonts and image assets from the uswds pacakge into the NCIDS directory under `ncids-css/dist/`. This is so the partials can be read and imported by Drupal or other content managment systems, allowing them to take what they need and not bloat their CSS files.

```css
dist/
├── css/
│   ├── ncids.min.css.map
│   ├── ncids.min.css
│   └── ncids.css
├── fonts/
├── img/
└── scss/
    ├── base/
    ├── components/
    ├── core/
    ├── ...

    /* follows the uswds folders */

```

Next we overlay our `_settings-color.scss` and `_system_tokens.scss` along with our `ncids-tokens` directory. These tokens have been created to match the uswds color family and grade patterns and sets our colors/tokens as priority during the build as well as allowing them to be called in the scss mixins.

```css
scss/
├── core/
│   ├── ncids-tokens/
│   │   ├── _cerulean.scss
│   │   ├── _cranberry.scss
│   │   ├── _golden.scss
│   │   ├── _navy.scss
│   │   └── _teal.scss
│   └── _system-tokens.scss
│
└── settings/
    └── _settings-colors.scss

```

The SASS task will then using Stylelint, check files and then compile to `dist/css/ncids.css` and `dist/css/ncids.min.css`

```css
dist/
├── css/
│   ├── ncids.min.css.map
│   ├── ncids.min.css
│   └── ncids.css
├── fonts/
└── img/
```

#

## Build steps

```js
// in root directory
$:  yarn install

// in ncids/packages/ncids-css/
$:  yarn run build

```
