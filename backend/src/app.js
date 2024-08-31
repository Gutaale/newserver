import express from "express";
import router from '../routes/userRoute.js'
import bookRoute from '../routes/books.js'
import dotenv from 'dotenv/config'
import mongoose from "mongoose";
import cors from 'cors'
// import User from "../models/userModel.js";

const app=express()
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT || 5000
// const name="Moamed"
app.use('/', router)
app.use('/books', bookRoute)

mongoose.connect(process.env.DATABASE_CONNECTION_URL).then(()=>console.log("Connected"))

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})