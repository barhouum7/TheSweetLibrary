const express = require('express') /* Import Express from The Express Library that is installed using NPM */
const app = express() /* Get the App Portion of Express */
const expressLayouts = require('express-ejs-layouts') /* Get the Express Layouts package that is installed as Well */

app.set('view engine', 'ejs') /* Set my view Engine | In my Case I'm going to use the EJS as my view engine */
app.set('views', __dirname + '/views') /* Setting where my views are going to be coming from */
app.set('layout', 'layouts/layout') /* hook up Express Layouts: Every Single file is going to be put inside of this Layout file */
app.use(expressLayouts) /* Here to Telling the Express Application that we want use Express Layouts */
app.use(express.static('public')) /* Also Here to Telling the Express Application that where our public files are 
going to be.. (our style sheets, javascript Files, etc...) */

app.listen(process.env.PORT || 3000) /* Telling to our App that we want to Listening on Certain PORT */