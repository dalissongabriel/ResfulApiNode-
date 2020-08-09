const express = require('express')
const knex = require('./database')

const routes = express.Router()
const Users = require('./controllers/UserController')


routes.get('/users', Users.index)
routes.post('/users', Users.create)


module.exports = routes