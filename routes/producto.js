const {Router}= require('express')

const route= Router();

const {getProducto, postProducto, putProducto, deleteProducto}= require('../controller/producto')

route.get('/', getProducto)

route.post('/', postProducto)

route.put('/', putProducto)

route.delete('/', deleteProducto)

module.exports = route