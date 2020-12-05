const db = require("../models");
const Evnt = db.events;
const Op = db.Sequelize.Op;

// Create and Save a new event
exports.create = (req, res) => {
  if (!req.body.title) { 
    res.status(400).send({ message: "Event cannot be empty!" });
    return;
  }

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

// Find all 
exports.findAll = async (req, res) => {
    await Evnt.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).json(err)
        });
  
};

// Find by ID
exports.findOne = async (req, res) => {
  const { event_ID } = req.params;
  await Evnt.findByPk(event_ID)
            .then(data => {
                res.send(data)
            })
            .catch(e => {
                res.status(500).send({
                    message: "Could not find by ID"
                });
            })
};

// Find by author
exports.findByAuthor = async (req, res) => {
    const { eauthor } = req.params;
    await Evnt.findAll({
        where: {
            author: eauthor
        }
    }).then(data => {
        res.send(data)
    }).catch(e => {
        res.status(500).json(e)
    })
}

// Update by ID
exports.update = (req, res) => {
    const { eid } = req.params;
    Evnt.update({
        name: req.body.name,
        description: req.body.desc,
        url: req.body.url,
        start: req.body.startDate,
        end: req.body.endDate,
        address: req.body.address
    }, {
        where: {
            lastname: eid
        }
    })
};

// Delete by ID
exports.delete = async (req, res) => {
    const delid = req.params.id;
    await Evnt.destroy({
        where: {
            id: delid
        }
    }).then(deletedRecord => {
        if(deletedRecord === 1) {
            res.status(200).json({
                message:"Deleted successfully"
            });          
        }
        else
        {
            res.status(404).json({
                message:"Record could not be found"
            })
        }
    })
    .catch(function (error) {
        res.status(500).json(error);
    });
};
