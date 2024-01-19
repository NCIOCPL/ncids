## Content Changes

Content is created in [Markdown with JSX Extensions (.mdx)](https://mdxjs.com/) and placed in the `<root>/content` folder. The content begins with YAML "front-matter" holding the metadata of the page. While this all may sound fancy, for the most part it will be like editing any other .md file.

## Testing

The package has been configured to support jest following the [Gatsby Unit Testing](https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/) instructions. The most important part of this was setting up `gatsby` as a mock so that you can mock graphql queries.

One major difference is that we use `testing-library/react` vs `react-test-renderer`, so we skipped those steps. We made additional changes with `<root>/setup-tests.js` in order to extend expects with the testing-library additions.
