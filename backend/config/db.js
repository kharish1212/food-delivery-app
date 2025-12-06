import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://kharish:12122003@cluster0.agno98x.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}