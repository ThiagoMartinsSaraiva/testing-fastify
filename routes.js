async function routes (fastify, options) {
  fastify.get('/', async (req, reply) => {
    reply.send('API is running')
  })

  fastify.get('/shinobi', async (req, reply) => {
    reply.send('This is the list of shinobis')
  })

  fastify.get('/shinobi/:id', async (req, reply) => {
    reply.send(`This is the shinobi of id ${req.params.id}`)
  })

  fastify.post('/shinobi', async (req, reply) => {
    console.log(req.body)
    reply.send(req.body)
  })

  fastify.delete('/shinobi/:id', async (req, reply) => {
    console.log(req.params.id)
    reply.send('Deleted successfully')
  })
}

module.exports = routes