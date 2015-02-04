var correctDbConnection = require('../lib/db_connection').getDbConnection();
var inCorrectDbConnection = require('../lib/db_connection').getDbConnection({
    host: 'pppdc9sssadprd0tl.corp.intuit.net',
    user: 'wptdashssboarasssssdd',
    password: 'testaddssssd1234',
    database: "assssdawpt"
});
var dbUtils = require("../appUtils/dbUtils");
var should = require('should');

describe('Test all db operations', function() {

    describe('Test getAllProperties method', function() {
        it('fetch all properties list positive test', function(done) {
            dbUtils.getAllProperties(function(properties, err) {
                properties.should.be.ok;
                (err === null).should.be.true;
                done();
            }, function(err) {}, correctDbConnection);
        });

        it('fetch all properties list negative test', function(done) {
            dbUtils.getAllProperties(function(properties, err) {}, function(err) {
                err.should.not.be.empty;
                done();
            }, inCorrectDbConnection);
        });
    });

/*    describe('Test createNewWPTUrl method', function() {
        it('fetch all properties list positive test', function(done) {
            dbUtils.getAllProperties(function(properties, err) {
                properties.should.be.ok;
                (err === null).should.be.true;
                done();
            }, function(err) {}, correctDbConnection);
        });

        it('fetch all properties list negative test', function(done) {
            dbUtils.getAllProperties(function(properties, err) {}, function(err) {
                err.should.not.be.empty;
                done();
            }, inCorrectDbConnection);
        });
    });*/
});
