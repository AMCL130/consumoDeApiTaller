const Cliente = require('../model/cliente')
const bcrypt = require('bcrypt')
const { generarJWT } = require('../helpers/generarJwt');
const jwt= require('jsonwebtoken')


async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

const login = async(req, res) => {
    const { nombre, contrasena } = req.body

    //Verificar si el email existe
    const cliente = await Cliente.findOne({nombre})

    try {

        if(!cliente){//Si encontró el email
            return res.status(400).json({
                msg: 'Correo electrónico no encontrado'
            })
        }

        if( !cliente.estado ){
            return res.status(400).json({
                msg: 'Cliente inactivo'
            })            
        }

        resultado = await comparePassword(contrasena, cliente.contrasena)

        if(resultado == true){
            const token = await generarJWT(cliente)
            res.cookie('token',token);//creando la cookie
            return res.status(200).json({
                //usuarios,
                token: token
            })  
                token
            
        }
        else{
            return res.status(400).json({
                msg: 'La contraseña es incorrecta'
            })  
        }

    } catch (error) {
        return res.status(400).json({
            msg: 'Apreciado Cliente contacte al administrador.'
        })
    }
}


const isAuthenticated = async (req,res,next)=>{
    try {
        const {token} = req.cookies;
        console.log('token:'+token)
        if(!token){
            return next('Necesita loguearse.');
        }
        const verify = jwt.verify(token,process.env.SECRET_KEY);
        console.log('verify:'+verify)

        req.user = await Cliente.findById(verify.id);
        next();
    } catch (error) {
       return next(error); 
    }
}


module.exports = {
    login,
    isAuthenticated
}
