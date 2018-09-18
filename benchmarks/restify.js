'use strict'

const restify = require('restify')
const db = require('../lib/db')

const server = restify.createServer()
server.get('/', function (req, res) {
  db.any('SELECT something FROM table WHERE thing')
    .then(data => res.send(JSON.stringify(data)))
    .catch(err => console.error(err))
})

server.listen(3000)
