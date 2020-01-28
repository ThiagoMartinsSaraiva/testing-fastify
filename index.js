const fastify = require('fastify')()

fastify.register(require('./routes'))

fastify.listen(3000, (err, address) => {
  if (err) throw err
  console.log(`Server running at ${address}`)
})