var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res) {
    var connection = mysql.createConnection({
        host: 'pppdc9prd0tl.corp.intuit.net',
        user: 'wptdashboard',
        password: 'test1234',
        database: "wpt"
    });

    connection.connect();

    connection.query('SELECT * from PropertyList', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ');
        res.json({
            'propertyList': rows
        })
        
    });

    connection.end();
});

router.get('/validate', function(req, res) {
    console.log("add");
    res.render('newuser', {});
});

module.exports = router;
