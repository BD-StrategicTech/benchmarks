'use strict'

const db = require('../lib/db')

const server = require('http').createServer(function (req, res) {
  res.setHeader('content-type', 'application/json')
  // res.end(JSON.stringify({ hello: 'world' }))
  db.any('SELECT something FROM table WHERE thing')
    .then(data => res.end(JSON.stringify(data)))
    .catch(err => console.error(err))
})

server.listen(3000)
