const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required:[true,'Por favor digite el nombre del producto']
    },

    precio:{
        type: Number,
        required:[true,'precio necesario']
    },

    cantidad:{
        type: Number,
        required:[true,'cantidad necesaria']
    },

    descripcion:{
        type: String,
        required:[true,'descripcion necesaria']
    },

    estado:{
        type: String,
        enum:['activo','inactivo'],
        required: [true, 'Estado obligatorio']
    }



})

module.exports = model('Producto', ProductoSchema)