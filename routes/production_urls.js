var express = require('express');
var router = express.Router();
var dbUtils = require("../appUtils/dbUtils");

/* Render create a new URL view */
router.get('/new', function(req, res) {
    dbUtils.getAllProperties(function(properties) {
        res.render("new_url", {title: "Self Sufficient Project", properties: properties});
    });
});

/* Create a new URL */
router.post('/createUrl', function(req, res) {
    dbUtils.createNewWPTUrl(req.body, function(record) {
        res.location("wpturls");
        res.redirect("/wpturls/new");
    });
});

/* Render search URLs view */
router.get('/searchURLs', function(req, res) {
    dbUtils.getAllProperties(function(properties) {
        res.render("search_urls", {title: "URL Search By Property", properties: properties});
    });
});

/* Fetch all URLs by given property name */
router.get('/getUrls', function(req, res) {
    console.log(req.query);
    dbUtils.fetchURLsByProperty(req.query.PropertyName, function(urlsData) {
        console.log(urlsData);
        res.render("urls_list", {title: "Self Sufficient Project", urlsData: urlsData});
    });
});
module.exports = router;