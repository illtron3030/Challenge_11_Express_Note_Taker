// Some npm packages that will use to give server functionality
const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes');
// Tells node that we are creating an "express" server
const app = express();
// Sets an initial port to be used later.
const PORT = process.env.PORT || 3001;
// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
app.use('/', apiRoutes);
app.use('/', htmlRoutes);
// Starts server
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
