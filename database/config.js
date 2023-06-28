const {mongoose}= require('mongoose');

dbconnection= async()=>{
    try{
        await(mongoose.connect(process.env.MONGO_CNN))
        console.log('Conectado a:', dbconnection)
    }catch(e){
        console.log(e);
    }

    
}

module.exports = dbconnection