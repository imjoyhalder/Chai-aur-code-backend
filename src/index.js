import mongoose  from "mongoose";
import { DB_NAME } from "./constants";
import express from 'express'

const app = express()

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on('error', (error)=>{
            console.log('Error: ', error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console(`App is running on ${process.env.PORT} port`)
        })
    }
    catch(error){
        console.log(error)
    }
})()