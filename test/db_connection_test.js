/*var db = require('../lib/db_connection');
var should = require('should');

describe('Test DB Connection', function() {

    it('DB connection positive test with valid options', function(done) {
        connection = db.getDbConnection();
        connection.query('SELECT 1', function(err, rows) {
            rows.should.be.ok;
            (err === null).should.be.true;
            done();
        });
    });

    it('DB connection negative test with invalid options', function(done) {
        connection = db.getDbConnection({
            host: 'pppdc9sssadprd0tl.corp.intuit.net',
            user: 'wptdashssboarasssssdd',
            password: 'testaddssssd1234',
            database: "assssdawpt"
        });
        connection.query('SELECT 1', function(err, rows) {
            err.should.not.be.empty;
            done();
        });
    });

});
*/