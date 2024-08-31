import express from 'express'
import {
        getAllBooks, 
        addBook, 
        getBookById,
        updateBook,
        deleteBook 
        } from '../controllers/bookController.js'


const bookRoute =express.Router()

bookRoute.get('/', getAllBooks);
bookRoute.get('/:id', getBookById);
bookRoute.post('/', addBook);
bookRoute.patch('/:id', updateBook);
bookRoute.delete('/:id', deleteBook);


export default bookRoute