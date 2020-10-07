/* Creating the index Route */
const express = require('express')
const router = express.Router() /* Get the router portion of that Express Varible */
const Book = require('../models/book')

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
router.get('/new', (req, res) => {
    res.send('New Book!')
    // res.render('authors/new', {
    //     author: new Author()
    // })
})

// For Creating Our Book Route
/* UPDATE THE CODE:  
    In order to make it a little bit cleaner
    we're going to use async await 
    for all of the functions */
router.post('/', async (req, res) => {
    res.send('Book Created Successfuly!')
    // const author = new Author({
    //     name: req.body.authorName
    // })
    // // Wraping my code inside try-catch block ..
    // try {
    //     const newAuthor = await author.save()
    //     /* res.redirect(`authors/${newAuthor.id}`) */
    //     res.redirect('authors')
    // } catch {
    //     res.render('authors/new', {
    //         author: author,
    //         errorMessage: 'ERROR Creating Author!'
    //     })
    // }
})

/* We should export our router 
to allow our application 
to get information from this index file */
module.exports = router