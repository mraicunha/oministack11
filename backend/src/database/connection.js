const knex = require('knex')
const configuration = require('../../knexfile')

const connction = knex(configuration.development)

module.exports = connction