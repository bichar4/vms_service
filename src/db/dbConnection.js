import mongoose from 'mongoose'

export const connect = ()=>{
    mongoose.connect(process.env.DB_LOCATION,{
        userNewUrlParser:true,
        useCreateIndex:true,
        useunifiedTopology:true
    })
    .then((result)=>{
        console.log('Mongoose is successfully connected')
    })
    .catch((err)=>{
        console.log('Mongoose connection unsuccessfult due to error');
    })
}