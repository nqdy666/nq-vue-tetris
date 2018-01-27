const serve = require('serve')
const path = require('path')
const server = serve(path.resolve(__dirname, 'dist'), {
	port: 1338
})
