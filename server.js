// Dependencies
const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;

// handle the data parsing with the express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//creating the routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// starting the server to begin testing
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });