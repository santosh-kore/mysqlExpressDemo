var express = require('express');
var mysql = require('mysql');

var dbConnection = {
    getDbConnection: function() {
        var connection = mysql.createConnection({
            host: 'pppdc9prd0tl.corp.intuit.net',
            user: 'wptdashboard',
            password: 'test1234',
            database: "wpt"
        });
        return connection;
    }
}

module.exports = dbConnection;
