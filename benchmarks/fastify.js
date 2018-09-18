'use strict'

const fastify = require('fastify')()
const db = require('../lib/db')

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

fastify.get('/', schema, function (req, reply) {
  db.any('SELECT something FROM table WHERE thing')
    .then(data => reply.send(data))
    .catch(err => console.error(err))
  // reply.send({ hello: 'world' })
})

fastify.listen(3000)
