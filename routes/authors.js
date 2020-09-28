/* Creating the index Route */
const express = require('express')
const author = require('../models/author')
const router = express.Router() /* Get the router portion of that Express Varible */
const Author = require('../models/author')

// For All Authors Route
router.get('/', (req, res) => {
    // res.send('Hello World !') // We just sending a response
    res.render('authors/index') // rendering our view
})

// For New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new', {
        author: new Author()
    })
})

// For Creating Our Author Route
router.post('/', (req, res) => {
    res.send('Author Route is Created.')
})

/* We should export our router 
to allow our application 
to get information from this index file */
module.exports = router