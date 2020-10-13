/* Creating the index Route */
const express = require('express')
const router = express.Router() /* Get the router portion of that Express Varible */
const multer = require('multer')
const path = require('path') /* This is a nodeJS built-in library */
const Book = require('../models/book')
const Author = require('../models/author')
const uploadPath = path.join('public', Book.coverImageBasePath)
const imageMimeTypes = ['images/jpeg','images/png','images/gif']
const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype))
    }
})

// For All Books Route
router.get('/', async (req, res) => {
    res.send('All Books here!')
    // let searchOptions = {}
    // if (req.query.name != null && req.query.name !== '') {
    //     searchOptions.name = new RegExp(req.query.name, 'i' /* i == insensitive */ )
    // }
    // try {
    //     const authors = await Author.find(searchOptions /* {} <-- This means that If we have no conditions, we just pass to it an empty JavaScript Object */ )
    //     /* res.send('Hello World !') */ // We just sending a response
    //     res.render('authors/index', {
    //         authors: authors,
    //         searchOptions: req.query
    //     }) // rendering our view
    // } catch {
    //     res.redirect('/')
    // }
})

// For New Book Route
router.get('/new', async (req, res) => {
    renderNewPage(res, new Book())
})

// For Creating Our Book Route
/* UPDATE THE CODE:  
    In order to make it a little bit cleaner
    we're going to use async await 
    for all of the functions */
router.post('/', upload.single('cover'), async (req, res) => {
    const fileName = req.file != null ? req.file.filename : null
    res.send('Book Created Successfuly!')
    const book = new Book({
        title: req.body.bookTitle,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        coverImageName: fileName,
        description: req.body.description

    })
    /* Wraping the ** book's saving ** code inside try-catch block .. */
    try {
        const mewBook = await book.save()
        /* res.redirect(`books/${newBook.id}`) */
        res.redirect('books')
    } catch {
        renderNewPage(res, book, true)
    }
})

async function renderNewPage(res, book, hasError = false) {
    try {
        const authors = await Author.find({})
        const params = {
            authors: authors,
            book: book
        }
        if (hasError){
            params.errorMessage = 'ERROR Creating Book!'
        }
        res.render('books/new', params)
    } catch {
        res.redirect('/books')
    }
}

/* We should export our router 
to allow our application 
to get information from this index file */
module.exports = router