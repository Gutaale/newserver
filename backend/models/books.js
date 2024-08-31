import mongoose from 'mongoose'

const {Schema, model}=mongoose


const bookSchema = Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    avialable:{
        type:Boolean
    }
})

const Book=model('book', bookSchema)
export default Book