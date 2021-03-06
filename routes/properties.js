var express = require('express');
var router = express.Router();
var dbUtils = require("../appUtils/dbUtils");

/* GET list of all properties in json format */
router.get('/list', function(req, res) {
    properties = dbUtils.getAllProperties(function(properties) {
        res.json({
            'propertyList': properties
        });
    }, function(error) {
        res.location("error");
        res.redirect("/error?errorMessage=Error while serving the request try again"/* + JSON.stringify(error)*/);
    });
});

module.exports = router;