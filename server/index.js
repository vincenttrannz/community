if (process.env.NODE_ENV != 'production') {
  const envConfig = require('dotenv').config()
  if (envConfig.error) throw envConfig.error
}

const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
