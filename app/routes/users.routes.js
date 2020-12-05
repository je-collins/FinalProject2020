module.exports = app => {
    const users = require("../controllers/users.controller.js");

    const router = require("express").Router();

    // Register a new account
    router.post("/", users.create);

    //Login to account
    router.get("/:id", users.findOne);

    // Delete a User with id
    router.delete("/:id", users.delete);


    app.use('/api/users', router);
};