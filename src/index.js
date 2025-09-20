import dotenv from 'dotenv'
import connectDB from "./db/dbConnection.js";
import app from './app.js';

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.get('/', (req, res)=>{
            res.send('Server is running properly')
        })
        app.listen(process.env.PORT || 8000 , ()=>{
            console.log(`Server is running at port: ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log('MongoDB connection failed🚩', error)
    })





// const app = express()
// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on('error', (error)=>{
//             console.log('Error: ', error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console(`App is running on ${process.env.PORT} port`)
//         })
//     }
//     catch(error){
//         console.log(error)
//         throw error
//     }
// })()