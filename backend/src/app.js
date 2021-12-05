import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

//Create an express app
const app = express()
app.use(morgan('combined'))
//Parse any json request that are sent in
app.use(bodyParser.json())
//Allow any host or client to access
app.use(cors())

//Get Request 
// when the /status page aka endpoint is loaded the res.send() is activated
// res stands for response
app.get('/status', (req,res) => {
    res.send({
        message: "hello world!"
    })
})

//App's running on 8081 port
app.listen(process.env.PORT || 8081)