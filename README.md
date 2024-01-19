# NCIDS
Design system for the National Cancer Institute (NCI)

Based on the U.S. Web Design System (USWDS), this design system provides principles, guidance and code to help design and build websites using the NCI look and feel.

NCIDS is built as a monorepo, utilizing *npm* and *npm workspaces* for dependency management and *lerna* for its utility commands.

## Packages
| Package name                                  | Description                                                                                                                                                                                                                                   |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Documentation`](./docs)  | Design system documentation site                                                                                                                                                                                                       |
| [`NCIDS-CSS`](./packages/ncids-css) | SASS/CSS package for NCIDS                                                                                                                                                                                                                              |
| [`NCIDS-JS`](./packages/ncids-js)     |  Javascript package builder for NCIDS                                                                                                                                                                        |
| [`NCIDS-React`](./packages/ncids-react)     |  React components for NCIDS                                                                                                                                                                        |


## Testing
| Package name                                     | Description                          |
|--------------------------------------------------|--------------------------------------|
| [`ncids-css-testing`](testing/ncids-css-testing) | SASS/CSS testing package for NCIDS   |
| [`ncids-js-testing`](testing/ncids-js-testing)   | JavaScript testing package for NCIDS |


## Install

Install NCIDS and its dependncies

`lerna bootstrap -- --frozen-lockfile`

## Development

See [The Wiki](https://github.com/NCIOCPL/ncids/wiki/Developing-NCIDS)
