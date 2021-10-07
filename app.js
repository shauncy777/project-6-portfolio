// Indicates modules to include in app and assigns to variables
const express = require("express");
const { projects }  = require('./data.json');
const app = express();

// Parses json data
app.use(express.json());

// Serves static files in public folder
app.use('/static', express.static('public'));

// Sets template rendering engine
app.set('view engine', 'pug');

// Creates route to the root and renders page
app.get('/', (req, res, next) => {
    res.render('index', { projects });
});

// Creates and renders about page
app.get('/about', (req, res, next) => {
    res.render('about');
});

// Creates dynamic project routes
app.get('/projects/:id', (req, res, next) => {
    const id = req.params.id;
    const project = projects[id];
        if (project){
        res.render('project', { project })
    } else {
        next();
    }
   
});

app.get('/error', (req, res, next) => {

    // Log out custom error handler indication
    console.log('Custom error route called');
  
    const err = new Error();
    err.message = `Custom 500 error thrown`
    err.status = 500;
    throw err;
  });
  
// Handles 404 errors 
app.use((req, res, next) => {
    console.log("404 Error Handler Called");
    const err = new Error('Not Found!');
    err.status = 404;
    res.render('page-not-found');
});

// Global error handler
app.use((err, req, res, next) => {
    if (err.status === 404){
        console.log("404 Error Handler Called");
        res.status(404).render('page-not-found', { err });
    } else {
    console.log("500 Error Handler Called");
    res.status(err.status || 500).render('error', { err });
    }
  });


// Sets up development server to run on port 3000
app.listen(3000, () => {
    console.log('The application is up and running on localhost: 3000!');

});