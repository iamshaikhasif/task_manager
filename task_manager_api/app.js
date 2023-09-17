require('dotenv').config();
const express = require('express');
const tasksRouter = require('./routers/tasks_router');
const app = express();
const dbConnection = require('./db/db_connection')


const port = process.env.PORT;

//middleware
app.use(express.json())

//route
app.get('/', (req, res)=>{
    res.send('Task Manager!');
});

//route for task 
app.use('/api/v1/tasks', tasksRouter)


const startServer = () => {
    try{
        dbConnection(process.env.MONOGO_URL)
        app.listen(port, ()=>{console.log(`Sever stared on ${port}`)});
    }catch(err){
        console.log(`Sever stared on ${err}`)
    }   
}


startServer()
