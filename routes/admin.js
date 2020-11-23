const express = require('express');
const router = express.Router();
const events = require('../controllers/event.controller');

router.get('/', (req, res) => {
    res.send('Admin Main');
});

router.get('/test', (req, res) => {
    res.send('Admin Test Route')
    });


router.post('/', events.create);
router.get('/:id', events.findOne);
    
module.exports = router;