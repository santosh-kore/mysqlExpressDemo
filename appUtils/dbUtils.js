var mysql = require('../lib/db_connection').getDbConnection();

var dbUtils = {
    getAllProperties: function(callback) {
        mysql.query('SELECT * from PropertyList', function(err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    },
    createNewWPTUrl: function(postData, callback) {
        for (var key in postData) {
            if ((key === "HomePageURL" || key === "IG_NA" || key === "IG_Asia" || key === "IG_APAC" || key === "IG_Europe") && postData[key] === "on") {
                postData[key] = "Y";
            }
        }
        mysql.query('INSERT INTO ProductionURLs SET ?', postData, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    fetchURLsByProperty: function(propertyName, callback) {
        mysql.query('SELECT ID, URL, PropertyName from ProductionURLs where PropertyName=?', [propertyName], function(err, rows, fields) {
            if (err) throw err;
            callback(rows);
        });
    },
    fetchURLByID: function(id, callback) {
        mysql.query('SELECT * from ProductionURLs where ID=?', [id], function(err, rows, fields) {
            if (err) throw err;
            callback(rows[0]);
        });
    },
    deleteURLByID: function(reqObj, callback) {
        mysql.query('DELETE FROM ProductionURLs WHERE ID=?', [reqObj.id], function(err, result) {
            if (err) throw err;
            callback(result)
        })
    },
    updateURLData: function(postData, callback) {
    	for (var key in postData) {
            if ((key === "HomePageURL" || key === "status" || key === "IG_NA" || key === "IG_Asia" || key === "IG_APAC" || key === "IG_Europe") && postData[key].length == 2 ) {
                postData[key] = "Y";
            } 
            if ((key === "HomePageURL" || key === "status" || key === "IG_NA" || key === "IG_Asia" || key === "IG_APAC" || key === "IG_Europe") && postData[key].length == 1 && postData[key] === "0") {
                postData[key] = "N";
            }
        }
        var reqValues = [];
        for (var key in postData) {
            reqValues.push(postData[key]);
        }
        mysql.query('UPDATE ProductionURLs SET URL = ?, PropertyName = ?, wptLocation = ?, Status = ?, HomePageURL = ?, IG_NA = ?, IG_Asia = ?, IG_APAC = ?, IG_Europe = ? where ID = ?', reqValues, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = dbUtils;
