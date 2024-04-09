// Note: The APIs wrapPageElement and wrapRootElement exist in both
// the browser and Server-Side Rendering (SSR) APIs. You generally should
// implement the same components in both gatsby-ssr.js and gatsby-browser.js
// so that pages generated through SSR are the same after being hydrated in the browser.
// Gatsby Docs: https://v3.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/

export { default as wrapRootElement } from './src/components/layouts/wrap-root-element';
