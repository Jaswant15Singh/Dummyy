import mongoose from "mongoose";

const connectMongo=async()=>{
 try{   
await mongoose.connect("mongodb://localhost:27017");
console.log("connected to database");
 }

 catch(error){
    console.log(error);
 }
}
export default connectMongo;