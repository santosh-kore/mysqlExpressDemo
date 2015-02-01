var express = require('express');
var router = express.Router();

/* Render error page */
router.get('/', function(req, res) {
    res.render("error", {message: req.query.errorMessage});
});

module.exports = router;