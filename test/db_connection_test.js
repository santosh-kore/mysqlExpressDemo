var db = require('../lib/db_connection');
var should = require('should');

describe('Test DB Connection', function() {

    it('should pass the query', function() {
        connection = db.getDbConnection();
        connection.query('SELECT 1', function(err, rows) {
            err.should.be.empty;
        });
    });

    it('should not pass the query', function() {
        connection = db.getDbConnection({
            host: 'pppdc9sssadprd0tl.corp.intuit.net',
            user: 'wptdashssboarasssssdd',
            password: 'testaddssssd1234',
            database: "assssdawpt"
        });
        connection.query('SELECT 1', function(err, rows) {
            err.should.not.be.empty;
        });
    });

});
