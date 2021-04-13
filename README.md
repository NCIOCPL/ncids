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



## Development
### Adding a "common" dependency

`yarn add new-dependency [--dev]`

### Linking sister repositories as dependencies

`lerna add @my-scope-name/dependency-name --scope=@my-scope-name/package-using-dependency`

### Removing a global dependency
If there’s a dependency that all packages use but that you want to remove, Lerna has the _exec_ command that runs an arbitrary command in each package. With this knowledge, we can use _exec_ to remove a dependency on all packages.

 `lerna exec -- yarn remove dep-name`

## Publishing

Publishing of the ncids-css and ncids-react packages is done by running the command: 
`lerna publish`
Running the command will assist in versioning, kick off package tests, build the packages and finally publish to github.
