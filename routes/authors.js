/* Creating the index Route */
const express = require('express')
const router = express.Router() /* Get the router portion of that Express Varible */

// For All Authers Route
router.get('/', (req, res) => {
    // res.send('Hello World !') // We just sending a response
    res.render('authers/index') // rendering our view
})

// For New Auther Route
router.get('/new', (req, res) => {
    res.render('authers/new')
})

// For Creating Our Auther Route
router.post('/', (req, res) => {
    res.send('Auther Route is Created.')
})

/* We should export our router 
to allow our application 
to get information from this index file */
module.exports = router