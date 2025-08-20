import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config();
const connectDb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MONGO DB CONNECTED");
    }
    catch(err){
        console.error(err.message);
        
    }
}
export default connectDb;