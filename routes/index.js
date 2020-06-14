/* Creating the index Route */
const express = require('express')
const router = express.Router() /* Get the router portion of that Express Varible */

// With this router Varible now we can create our Routes
router.get('/', (req, res) => {
    res.send('Hello World !') // We just sending a response
})

/* We should export our router 
to allow our application 
to get information from this index file */
module.exports = router