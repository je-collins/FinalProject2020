const db = require("../models/index");
const User = db.users;
const passport = require('passport');
const Op = db.Sequelize.OP;

// Register a new user
exports.create = (req, res) => {

    if (!req.body.username) {
        res.status(400).send({ message: "Username cannot be empty!" });
        return;
    }

    if (!req.body.password) {
        res.status(400).send({ message: "Password cannot be empty!" });
        return;
    }

    const users = {
        username: req.body.username,
        password: req.body.password
    };

    User.create(users)
        .then(data => {
            res.send(data);
            console.log(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred when registering a User"
            });
        });
};

 //Log in
exports.login = (req, res,next) => {
   passport.authenticate('local',(err,user,info) => {
        req.login(user,(err) =>{
            if (err) { return res.status(403).json({err: err, authuser: user}); }
            res.json(200, {err: null, authuser: user});
        });
        })(req,res,next);
};


// Delete by ID
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};
