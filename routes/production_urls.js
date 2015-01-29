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
    dbUtils.fetchURLsByProperty(req.query.PropertyName, function(urlsData) {
        res.render("urls_list", {title: "Self Sufficient Project", urlsData: urlsData});
    });
});

/* Fetch URL by given id */
router.get('/url/:id/:prop', function(req, res) {
    dbUtils.fetchURLByID(req.params.id, function(urlData) {
        res.render("url_details", {title: "URL Details", urlData: urlData});
    });
});

/* Delete URL by ID */
router.delete('/url/:id/:prop/delete', function(req, res) {
    dbUtils.deleteURLByID({ id: req.body.id, propName: req.body.PropertyName }, function(result) {
        res.location("wpturls");
        res.redirect("/wpturls/getUrls?PropertyName=" + req.body.PropertyName);
    });
});

/* Render edit URL view with URL data */
router.get('/url/:id/:prop/edit', function(req, res) {
    dbUtils.fetchURLByID(req.params.id, function(urlData) {
        res.render("edit_url", {title: "Edit URL Details", urlData: urlData});
    });
});

/* Render edit URL view with URL data */
router.get('/url/:id/:prop/edit', function(req, res) {
    dbUtils.fetchURLByID(req.params.id, function(urlData) {
        res.render("edit_url", {title: "Edit URL Details", urlData: urlData});
    });
});

/* Edit URL data */
router.put('/url/edit', function(req, res) {
    dbUtils.updateURLData(req.body, function(urlData) {
        res.location("wpturls");
        res.redirect("/wpturls/getUrls?PropertyName=" + req.body.PropertyName);
    });
    //res.json({"req": req.body});
});

module.exports = router;