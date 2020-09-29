/* Here in order to load that Variable inside dotenv file
    we just do a simple check If we are 
    running in the production environment or Not... */
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express') /* Import Express from The Express Library that is installed using NPM */
const app = express() /* Get the App Portion of Express */
const expressLayouts = require('express-ejs-layouts') /* Get the Express Layouts package that is installed as Well */
const bodyParser = require('body-parser')
/* Import the body-parser Library 
which is going to make it incredibly easy to access 
the different input elements from our actual server..*/


/* Importing our index router here 
so then we will be able to use it through our server*/
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

app.set('view engine', 'ejs') /* Set my view Engine | In my Case I'm going to use the EJS as my view engine */
app.set('views', __dirname + '/views') /* Setting where my views are going to be coming from */
app.set('layout', 'layouts/layout') /* hook up Express Layouts: Every Single file is going to be put inside of this Layout file */
app.use(expressLayouts) /* Here to Telling the Express Application that we want use Express Layouts */
app.use(express.static('public'))
/* Also Here to Telling the Express Application that where our public files are 
going to be.. (our style sheets, javascript Files, etc...) */
app.use(bodyParser.urlencoded({
    limit: '10mb',
    extended: false
}))

const mongoose = require('mongoose') /* Import Mongoose from The Mongoose Library that is installed already using NPM */

/* Here we want to set up our connection
        to be dependent upon our environment
        because when we're developing we want
        mangoose to connect to our local mongoDB Server
        BUT when we have our app deployed we want to
        connect it to a server that's on the web 
        somewhere so in here we're going to pass
        a string for the URL which going to come from 
        our environment Variables.. */
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    /* Options for how we want to set up 
       our MongoDB inside of our application.. */
})

const db = mongoose.connection /* Access the connection here.. */
/* Here we just log if we're or are not connected to our database. */
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected successfully to Mongoose.'))


app.use('/', indexRouter) /* Telling our Server 1-[ to pass our very Root of our App(From Where we Coming From) ] , 2-[ to use our indexRouter Reference Varible ] */
app.use('/authors', authorRouter) /* Telling our Server 1-[ to pass our very Root of our App(From Where we Coming From) ] , 2-[ to use our indexRouter Reference Varible ] */


app.listen(process.env.PORT || 3000, (error) => {
    if (error)
        console.log('\nERROR! Something Went Wrong.\n')
    else
        console.log('\nServer is listening on PORT: 3000\n')
}) /* Telling to our App that we want to Listening on Certain PORT */