var express = require('express');
var router = express.Router();
const model = require("../models/index")
const users = require("../models/index").users
const products = require("../models/index").products

/* GET orders listing. */
router.get('/', async function (req, res, next) {
    try {
        const orders = await model.orders.findAll({ include: [users, products] })
        if (orders.length !== 0) {
            res.json({
                status: 200,
                messages: "Get All orders Data with users & product",
                total_data: orders.length,
                data: orders
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
