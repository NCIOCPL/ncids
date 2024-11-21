import React from 'react';

// Note: The APIs wrapPageElement and wrapRootElement exist in both
// the browser and Server-Side Rendering (SSR) APIs. You generally should
// implement the same components in both gatsby-ssr.js and gatsby-browser.js
// so that pages generated through SSR are the same after being hydrated in the browser.
// Gatsby Docs: https://v3.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/

export { default as wrapRootElement } from './src/components/layouts/wrap-root-element';

const isStyleComponent = (node) =>
  typeof node === 'object' && node != null && node.type === 'style' && node.props?.['data-href'] !== null;

/**
 * This was lifted from https://github.com/vtex-sites/gatsby.store, found as a fix linked
 * in the issue below. I am keeping comments and code as is. The trick is, all Gatsby
 * inlined style tags have a data-href that links to the built stylesheet, so all you
 * have to do is replace the <style> with a <link> to that href.
 *
 * --- Start of copied comment ---
 * Gatsby inlines all styles from the app inside a `<style/>` tag. This decreases
 * FCP, but increases TBT. Since we are having trouble with TBT, replacing `<style/>`
 * with `<link/>` tags should lower TBT. This switch, however is not supported by
 * Gatsby.
 * A workaround described in https://github.com/gatsbyjs/gatsby/issues/1526 is
 * implemented below
 *
 * We also need to ensure the global style as the first file to prevent break the style
 */
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  const transformedHeadComponents = getHeadComponents()
    .sort((node) => {
      if (isStyleComponent(node)) {
        const styleHref = node.props?.['data-href'] ?? node.props?.href ?? ''
        const isGlobalStyle = /^\/styles.[a-zA-Z0-9]*.css$/.test(styleHref) // global style regex

        return isGlobalStyle ? -1 : 1
      }

      return 1
    })
    .map((node) => {
      if (isStyleComponent(node)) {
        const styleHref = node.props?.['data-href'] ?? node.props?.href

        if (styleHref) {
          return (
            <link
              href={styleHref}
              rel="stylesheet"
              type="text/css"
              media="screen"
            />
          )
        }
      }

      return node
    })

  replaceHeadComponents(transformedHeadComponents)
}
