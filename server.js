const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = __dirname + '/public/';

const app = express();

app.use(express.static(path));

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});


require("./app/routes/events.routes")(app);

require('./app/routes/users.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});