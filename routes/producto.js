const {Router}= require('express')

const route= Router();

const {getProducto, postProducto, putProducto, deleteProducto}= require('../controller/producto')

const {isAuthenticated}= require('../controller/auth')

route.get('/', isAuthenticated,getProducto)

route.post('/', isAuthenticated, postProducto)

route.put('/', putProducto)

route.delete('/', deleteProducto)

module.exports = route