const express= require('express');
const cors  = require('cors');
const bodyParser = require('body-parser')


const dbconnection= require('../database/config')

class server{
    constructor(){
        this.app= express();
        this.port= process.env.PORT 
        this.clientesPath = '/api/cliente'
        this.productosPath='/api/producto'
        this.middlewares();
        this.routes();
        this.dbconectar();

    }

    middlewares(){
        this.app.use(express.static(__dirname + '/'));
        this.app.use(cors());
        this.app.use(bodyParser.json()); //en este caso el cors y el bodyparse me dan error, porque no estan definidos
    }

    routes(){
        this.app.use(this.clientesPath, require('../routes/cliente'))
        this.app.use(this.productosPath, require('../routes/producto'))
    }

    async dbconectar(){
        await dbconnection()
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`escuchando por el puerto ${this.port}`)
        })
    }

}

module.exports = server