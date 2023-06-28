const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Por favor digite el nombre del producto']
    },

    precio: {
        type: Number,
        required: [true, 'precio necesario'],
        validate: {
            validator: function (value){
                return  value > 0;
            },
            message: 'El precio debe ser mayor a cero'
        },
        min: [1, 'El precio debe ser mayor a cero']
    },

    cantidad: {
        type: Number,
        required: [true, 'cantidad necesaria'],
        validate: {
            validator: function (value){
                return Number.isInteger(value) && value > 0;
            },
            message: 'La cantidad debe ser un entero y positiva'
                }
    },

    descripcion: {
        type: String,
        required: [true, 'descripcion necesaria']
    },

    estado: {
        type: String,
        enum: {
            values: ['activo', 'inactivo'],
            message: 'Estado: solo se permite "activo" o "inactiv" '
        },
        required: [true, 'Estado obligatorio']
    }



})

module.exports = model('Producto', ProductoSchema)
