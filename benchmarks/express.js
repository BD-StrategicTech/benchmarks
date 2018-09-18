'use strict'

const express = require('express')

const app = express()
const db = require('../lib/db')

app.disable('etag')
app.disable('x-powered-by')

app.get('/', function (req, res) {
  // res.json({ hello: 'world' })
  db.any('SELECT something FROM table WHERE thing')
    .then(data => res.json(data))
    .catch(err => console.error(err))
})

app.listen(3000)
