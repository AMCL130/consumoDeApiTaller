const {mongoose}= require('mongoose');

dbconnection= async()=>{
    try{
        await(mongoose.connect(process.env.MONGO_CNN))

    }catch(e){
        console.log(e);
    }

    
}

module.exports = dbconnection