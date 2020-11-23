const db = require("../models");
const Evnt = db.events;
const Op = db.Sequelize.Op;

// Create and Save a new event
exports.create = (req, res) => {

//   if (!req.body.title) { 
//     res.status(400).send({ message: "Event cannot be empty!" });
//     return;
//   }

  const event = new Evnt({  // Using "Event" caused reserved word issue.
      name: req.body.title,
      description: req.body.description,
      url: req.body.url,
      start: req.body.start,
      end: req.body.end,
      address: req.body.address
  });

  event
    .save(event)
    .then(data => {
        res.send(data);
        console.log(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error occured while inserting event"
        });
    });
};

// Retrieve all 
exports.findAll = (req, res) => {
  
};

// Find by ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  Evnt.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error while looking up by ID"
        });
    });
};

// Update by ID
exports.update = (req, res) => {
  
};

// Delete by ID
exports.delete = (req, res) => {
  
};
