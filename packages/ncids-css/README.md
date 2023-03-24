# ncids-css

## Getting Started
In order to download the ncids-css package, you will have to set up the @nciocpl organizational scope in npm to see the package.  Create a .npmrc file in the root of your project containing the following:

```
@nciocpl:registry=https://npm.pkg.github.com
```

## Documentation

This package will build the NCI Design System (NCIDS) css from the included scss files & the U.S. Web Design System (USWDS) scss files. This process adds in our special token palletes, and other overrides into the existing system to fit the NCI brand design.

### Using `ncids-css` in your project

#### Install ncids-css via the command line

```bash
$ npm install @nciocpl/ncids-css
```

#### Sass

`ncids-css` requires [Sass Load Paths](https://sass-lang.com/documentation/at-rules/use#load-paths) to compile for use in your project.

Load paths must include a path to the `/packages` directory for NCIDS packages and `/uswds-packages` for USWDS packages. An example using Webpack might look like:

```javascript
{
		loader: 'sass-loader',
		options: {
			sassOptions: {
				includePaths: [
					path.join(
						__dirname,
						'../node_modules/@nciocpl/ncids-css/packages'
					),
					path.join(
						__dirname,
						'../node_modules/@nciocpl/ncids-css/uswds-packages'
					),
				],
			},
			sourceMap: true,
		},
},
```

#### Basic setup

Import styles in your sass entrypoint at the top of the file. This sets up uswds variables by the platform. This file is only required once for a sass entrypoint. Any subsequent uses after that of `uswds-core` will use the overrides defined here whenever `uswds-core` is reference.

```sass
@use "uswds-core" with (
	$theme-image-path: "@nciocpl/ncids-css/uswds-img",
	$theme-show-notifications: false,
	$theme-show-compile-warnings: false,
	$theme-utility-breakpoints: (
		"card": false,
		"card-lg": false,
		"mobile": false,
		"mobile-lg": true,
		"tablet": true,
		"tablet-lg": true,
		"desktop": true,
		"desktop-lg": false,
		"widescreen": true
	)
);
```

Import normalizer, typography, elements, and accessibility classes

```sass
@forward "uswds-global";
```

Import all packages at once

```sass
@forward "ncids";
```

or import only the packages you need invidivdually

```sass
@forward "usa-layout-grid";
@forward "nci-header";
@forward "nci-autocomplete";
@forward "usa-footer";
```

### Learn more

For more information about using the `ncids-css` package, please refer to our [documentation site](https://designsystem-dev.cancer.gov/).

## Development

See [The Wiki](https://github.com/NCIOCPL/ncids/wiki/Developing-NCIDS)
