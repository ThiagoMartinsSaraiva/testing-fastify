const fastify = require('fastify')()

fastify.register(require('./database'), {
  url: 'mongodb://thiaguera:root12@ds040027.mlab.com:40027/naruto'
})

fastify.register(require('./routes'))

fastify.listen(3000, (err, address) => {
  if (err) throw err
  console.log(`Server running at ${address}`)
})