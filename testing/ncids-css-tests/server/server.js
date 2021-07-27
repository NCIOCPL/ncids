const express = require('express');
const renderSass = require('./render-sass');
const app = express();
const port = 3000;
// Sass handler.
app.use(renderSass);
// Serve up static HTML files and any other assets.
app.use(express.static('public'));
// Start the server listening for requests.
app.listen(port, () => {
	console.log(`NCIDS CSS Test Server listening at http://localhost:${port}`);
});
