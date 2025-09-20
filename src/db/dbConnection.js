import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = ()=>{
    try {
        const connectionInstance = mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n🚀MongoDB connection Host : ${connectionInstance}`)
        return connectionInstance
    } catch (error) {
        console.log('MONGODB Connection Error!!', error)
        process.exit(1)
    }
}

export default connectDB