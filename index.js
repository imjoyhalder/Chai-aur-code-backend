const express = require('express')

const app = express()
const port = 5000

app.use(express.json())

app.get('/', async(req, res)=>{
    res.send('Backend server is running🚀🚀')
})


app.listen(port, ()=>{
    console.log('Server is running properly')
})

