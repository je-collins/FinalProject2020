const express = require('express');
const router = express.Router();
const events = require('../controllers/event.controller');

router.get('/', (req, res) => {
    res.send('Admin Main');
});

router.post('/create', events.create);

router.get('/:id', events.findOne);
router.get('/findall', events.findAll);

router.get('/:author', events.findByAuthor);

router.delete('/:id', events.delete);

module.exports = router;