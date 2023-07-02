const {Router}= require('express')

const route= Router()

const {getCliente, postCliente, putCliente, deleteCliente}= require('../controller/cliente')

const{isAuthenticated}= require('../controller/auth')

route.get('/',isAuthenticated, getCliente)

route.post('/',isAuthenticated, postCliente)

route.put('/', putCliente)

route.delete('/', deleteCliente)


module.exports = route