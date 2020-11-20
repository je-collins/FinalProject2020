require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const app = express();

// Parses result to json
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

app.use(bodyParser.json());

// CONNECT TO DB


// Route to Home
app.get('/', (req, res) => {
    console.log("Home Route.");
    res.send('Home Route');
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT)
});