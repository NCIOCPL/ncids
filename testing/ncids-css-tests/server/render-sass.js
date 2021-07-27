const path = require('path')
const fs = require('fs')
const sass = require('sass')
module.exports = async function renderSass (req, res, next) {
  // ignore non-CSS requests
  if (!req.path.endsWith('.css')) return next()
  // derive SCSS filepath from CSS request path
  const file = path.join(process.cwd(), 'public', req.path).replace('.css', '.scss')
  if (!fs.existsSync(file)) return res.status(404).end()
	const sassOutput = sass.renderSync({
		file,
		includePaths: [
			path.join(__dirname, '..', 'node_modules'),
			path.join(__dirname, '..', '..', '..', 'node_modules'),
		],
		outputStyle: (process.env.UNCOMPRESSED_CSS === 'true') ? 'expanded' : 'compressed',
	});
  res.header('content-type', 'text/css')
  res.send(sassOutput.css.toString())
}
