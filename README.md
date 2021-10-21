# NCIDS
Design system for the National Cancer Institute (NCI)

Based on the U.S. Web Design System (USWDS), this design system provides principles, guidance and code to help design and build websites using the NCI look and feel.

NCIDS is built as a monorepo, utilizing *yarn* and *yarn workspaces* for dependency management and *lerna* for its utility commands.

## Packages
| Package name                                  | Description                                                                                                                                                                                                                                   |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Documentation`](./docs)  | Design system documentation site                                                                                                                                                                                                       |
| [`NCIDS-CSS`](./packages/ncids-css) | SASS/CSS package for NCIDS                                                                                                                                                                                                                              |
| [`NCIDS-JS`](./packages/ncids-js)     |  Javascript package builder for NCIDS                                                                                                                                                                        |
| [`NCIDS-React`](./packages/ncids-react)     |  React components for NCIDS                                                                                                                                                                        |


## Testing
| Package name                                  | Description                                                                                                                                                                                                                                   |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`ncids-css-testing`](testing/ncids-css-testing) | SASS/CSS testing package for NCIDS                                                                                                                                                                                                                              |


## Development
### Adding a "common" dependency

`yarn add new-dependency [--dev]`

### Linking sister repositories as dependencies

`lerna add @my-scope-name/dependency-name --scope=@my-scope-name/package-using-dependency`

### Removing a global dependency
If there’s a dependency that all packages use but that you want to remove, Lerna has the _exec_ command that runs an arbitrary command in each package. With this knowledge, we can use _exec_ to remove a dependency on all packages.

 `lerna exec -- yarn remove dep-name`

### Referencing ncids-css in other packages in this repo
NCIDS uses uswds, and therefore references `uswds/dist/scss/**/somefile` in its scss files. Sass is smart enough to be able to find the package in node_modules, but you just need to help it a bit. You can do this by passing an array of search paths to the `includePaths` setting of sass. Our uswds has been hoisted to the root `node_modules`. It should be also noted that if you want to reference `@nciocpl/ncids-css` you also need to have the root `node_modules` in the search paths, so score. Assuming you are calling sass from the root of your package, raw sass config looks like:
```
includePaths: [
	path.join(__dirname, 'node_modules'), // The package's node_modules
	path.join(__dirname, '..', '..', 'node_modules'), // The root node modules from a package within root/packages
],
```

SPECIAL NOTE: the webpack sass-loader only knows how to pass .scss file to sass. Sass still need to have the includePaths setup on it, and this is separate from webpack resolution. A great example of this is in ncids-css itself.
```
	{
		loader: 'sass-loader',
		options: {
			sassOptions: {
				includePaths: [
					path.join(__dirname, 'node_modules'),
					path.join(__dirname, '..', '..', 'node_modules'),
				],
			},
		},
	},
```

There is an open TODO to figure out how this all might work from an external repo consuming our package.

## Publishing

Publishing of the ncids-css and ncids-react packages is done by running the command:
`lerna publish`
Running the command will assist in versioning, kick off package tests, build the packages and finally publish to github.
