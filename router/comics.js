const express = require('express');
const router = express.Router();
const models = require('../models')






router.get('/comics', (req, res) => {
  models.Comic.findAll().then((comics)=>{
    console.log(comics)
    res.json(comics)
  })
});









module.exports = router;
