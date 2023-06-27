const { response } = require('express');
// const { validacion}= require('express-validator');


const Producto = require('../model/producto')


const getProducto = async (req, res = response) => {
    let mensaje = ''

    try {
        const producto = await Producto.find()
        mensaje = producto
    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: mensaje
    })

}


const postProducto = async (req, res = response) => {
    const body = req.body
    let mensaje = ''
    const producto = new Producto(body)

    console.log(body)

    try {
        await producto.save();
        mensaje = 'producto creado con exito'
    } catch (error) {
        mensaje = error
    }
    res.json({
        mensaje
    })
}


const putProducto = async (req, res = response) => {
    const body = req.body
    console.log(body)
    let mensaje = ''

    // const errors= validacion(req);
    // if (!errors.empty()) {
    //     return res.status(400).json({errors: errors.array()});
    // }

    try {
        await Producto.findOneAndUpdate({ _id: body._id },
            {
                nombre: body.nombre, precio: body.precio, cantidad: body.cantidad,
                descripcion: body.descripcion, estado: body.estado
            })
        mensaje = 'Producto modificado con exito'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje: mensaje
    })
}


const deleteProducto = async (req, res = response) => {
    const body = req.body
    let mensaje = ''

    try {
        await Producto.deleteOne({ _id: body._id})
        mensaje = 'producto eliminado con exito'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
}


module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}
