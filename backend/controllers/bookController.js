import Book from '../models/books.js'

export const getAllBooks=async(req, res)=>{
    try{
        let books = await Book.find()
        // console.log(books)
        res.status(200).json(books)
    }catch(err){
        res.status(404).json(err)
    }
}
export const getBookById=async(req, res)=>{
    const id=req.params.id
    try{
        const book = await Book.findById(id)
        // console.log(books)
        res.status(200).json(book)
    }catch(err){
        res.status(404).json({message:err.message})
    }
}

export const addBook = async(req,res)=>{
const {name, author, description,price,avialable}=req.body
try{
const book = new Book({
    name, 
    author,
    description,
    price,
    avialable
})
await book.save()
res.status(201).json(book)
}catch(err){
    res.status(202).json({message:err})
}
}
export const updateBook = async(req,res)=>{
    const id=req.params.id
const {name, author, description,price,avialable}=req.body
try{
const book = await Book.findByIdAndUpdate(id,{
    name, 
    author,
    description,
    price,
    avialable
})
await book.save()
res.status(201).json(book)
}catch(err){
    res.status(202).json({message:err})
}
}

export const deleteBook = async(req,res)=>{
    const id=req.params.id
try{
const book = await Book.findByIdAndDelete(id)
res.status(201).json(book)
}catch(err){
    res.status(202).json({message:err.message})
}
}


