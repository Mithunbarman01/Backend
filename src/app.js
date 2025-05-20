import mongoose from "mongoose";
const appSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
});
