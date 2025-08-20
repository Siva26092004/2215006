import Log from '../LogginMiddleware/log.js'
import express from 'express';
import connectDb from './utils/dbConnect.js';
import routes from './routes/routes.js'
const app=express();
app.use(express.json());
Log("backend","debug","domain","Testing");
connectDb();
app.use("/api",routes)
app.listen(5000,()=>{
    console.log("server started successfully");
})
