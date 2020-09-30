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
    const author = new Author({
        name: req.body.authorName
    })
    author.save((err, newAuthor) => {

    })
    res.send('- Author Route is Created!<br /><br />- Author Name is: ' + req.body.authorName)
})

/* We should export our router 
to allow our application 
to get information from this index file */
module.exports = router