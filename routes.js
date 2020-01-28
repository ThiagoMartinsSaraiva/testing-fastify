async function routes (fastify, options) {
  fastify.get('/', async (req, reply) => {
    reply.send('API is running')
  })
}

module.exports = routes