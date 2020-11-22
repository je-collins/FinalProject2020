const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Admin Main');
});

router.get('/test', (req, res) => {
    res.send('Admin Test Route')
    });
    
module.exports = router;