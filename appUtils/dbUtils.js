var mysql = require('../lib/db_connection').getDbConnection();

var dbUtils = {
    getAllProperties: function(callback) {
    	var properties = {};
        mysql.query('SELECT * from PropertyList', function(err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    },
    createNewWPTUrl: function(postData, callback) {
    	for(var key in postData) {
    		if((key === "HomePageURL" || key === "IG_NA" || key === "IG_Asia" || key === "IG_APAC" || key === "IG_Europe") && postData[key] === "on") {
    			postData[key] = "Y";
    		}
    	}
    	mysql.query('INSERT INTO ProductionURLs SET ?', postData, function(err, result) {
    		if (err) throw err;
    		callback(result);
    	});
    },
    fetchURLsByProperty: function(propertyName, callback) {
    	console.log(propertyName);
    	mysql.query('SELECT ID, URL from ProductionURLs where PropertyName=?', [propertyName], function(err, rows, fields) {
    		if (err) throw err;
    		callback(rows);
    	});
    }
}

module.exports = dbUtils;