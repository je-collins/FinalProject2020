require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const app = express();

const users = require('./routes/users');
const admin = require('./routes/admin');

// Parses result to json
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

app.use(bodyParser.json());

// CONNECT TO DB
try {
  const db = require('./models'); 
  db.sequelize.sync();
} catch (e) {
  console.log("mySQL server likely failed to connect.");
  //console.log(e);
}

// Route to Home
app.get('/', (req, res) => {
    console.log("Main directory");
    res.send('Home Page');
});

app.use('/users', users);
app.use('/admin', admin);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT)
});