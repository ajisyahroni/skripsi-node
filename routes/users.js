var express = require('express');
var router = express.Router();
const model = require("../models/index")

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const users = await model.users.findAll({ include: model.orders })
    if (users.length !== 0) {
      res.json({
        status: 200,
        messages: "Get All Users Data",
        total_data: users.length,
        data: users
      })
    }
    else {
      res.json({
        status: 200,
        messages: "EMPTY",
        total_data: 0,
        data: []
      })
    }

  } catch (error) {
    res.json({
      status: 400,
      messages: error.messages,
      data: []
    })
  }
});
module.exports = router;
