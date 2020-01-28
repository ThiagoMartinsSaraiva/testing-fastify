const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose')

async function dbConnector (fastify, options) {
  const url = options.url
  delete options.url

  const db = mongoose.connect(url,{
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  fastify.decorate('mongo', db)
}

module.exports = fastifyPlugin(dbConnector)