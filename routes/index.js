var express = require('express');
var router = express.Router();
var dbUtils = require("../appUtils/dbUtils");

/* GET home page or page to add/create new WPT url */
router.get('/', function(req, res) {
    dbUtils.getAllProperties(function(properties) {
        res.render("index", {title: "Self Sufficient Project", properties: properties});
    });
});

module.exports = router;
