//Create web server
//Create a new Express app
const express = require('express');
const app = express();
//Use the express.static middleware to serve static files
app.use(express.static('public'));
//Use the express.json middleware to parse JSON request bodies
app.use(express.json());
//Use the express.urlencoded middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));
//Use the commentsRouter for all routes that start with /comments
const commentsRouter = require('./commentsRouter');
app.use('/comments', commentsRouter);
//Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});