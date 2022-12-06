# `ncids-js-testing`

This holds an example HTML website using NCIDS and can be used for testing ncids-js.

# Editing Example Pages

If adding another example page for demo or whatever reason
    - add the page as a standard HTML file within this `/public` directory (similar to other example pages)
    - add a link to the page within the <ul> of index.html within `/public` directory
    - rebuild

### start
```
$: yarn start
```

### accessibility testing
```
$: yarn test-pa11y
```

