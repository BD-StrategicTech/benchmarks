const pgp = require('pg-promise')()

// Postgres setting will live inisde of this object
module.exports = pgp({
    host: 'ENTER HOST',
    port: 'ENTER PORT',
    user: 'ENTER USER',
    password: 'ENTER PASSWORD',
    database: 'ENTER DATABASE'
})
