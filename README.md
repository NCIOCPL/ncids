# NCIDS
Design system for the National Cancer Institute (NCI)

Based on the U.S. Web Design System (USWDS), this design system provides principles, guidance and code to help design and build websites using the NCI look and feel.

NCIDS is built as a monorepo, utilizing *pnpm* and *pnpm workspaces* for dependency management and *lerna* for its utility commands.

## Packages
| Package name                                  | Description  |
| --------------------------------------------- | -------------- |
| [`Documentation`](./docs)  | Design system documentation site |
| [`NCIDS-CSS`](./packages/ncids-css) | SASS/CSS package for NCIDS |
| [`NCIDS-JS`](./packages/ncids-js)     |  Javascript package builder for NCIDS |
| [`NCIDS-React`](./packages/ncids-react)     |  React components for NCIDS |
| [`NCIDS-Twig`](./packages/ncids-twig)     |  Twig templates for NCIDS components |

## Testing
| Package name                                     | Description                          |
|--------------------------------------------------|--------------------------------------|
| [`ncids-css-testing`](testing/ncids-css-testing) | SASS/CSS testing package for NCIDS   |
| [`ncids-js-testing`](testing/ncids-js-testing)   | JavaScript testing package for NCIDS |

## Installing NCIDS for use in your project
Please read the instructions for [Getting Started for Developers](https://designsystem-dev.cancer.gov/develop/get-started/developers).

## Developing NCIDS
#### Prerequisites
* pnpm 8.x
* lerna 6.6.2
* Authenticated to github registry using an auth token. See [./docs/content/get-started/developers.mdx](./docs/content/get-started/developers.mdx)

### Install
`pnpm install`

> **NOTE:** Do not try and install any node modules without checking with admins first. Package management is a bit of a nightmare with
> all of the dependencies and peer dependencies. So a new package must be carefully added and ensure it does not inadvertently affect
> any software like Storybook or Gatsby.

### Development notes
See [The Wiki](https://github.com/NCIOCPL/ncids/wiki/Developing-NCIDS)
