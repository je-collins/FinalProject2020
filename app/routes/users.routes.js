module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const router = require("express").Router();

    // Register a new account

    router.post("/", users.create);



    router.post('/login', passport.authenticate('local', {
            successRedirect: '/dashboard',
            failureRedirect: '/',
            failureFlash: true },
        function(req, res) {
            res.redirect('/');
        }));

    // Delete a User with id
    router.delete("/:id", users.delete);


    app.use('/api/users', router);
};