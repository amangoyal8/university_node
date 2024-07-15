const express = require('express');
const router = express.Router();

const data = require('../controller/index');
router.get('/getlist', data.handleGetFav);
router.post('/setfav', data.handleSunbmitData);
router.delete('/delfav/:id', data.handleRemoveFav);

module.exports = router;