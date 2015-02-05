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

    describe('Test createNewWPTUrl method', function() {
        var newURLDummyData = {};
        before(function() {
            newURLDummyData = {
                PropertyName: 'AAG',
                URL: 'http://www.w3schools.com/booststrap/bootstrap_ref_css_buttons.asp',
                wptLocation: 'MyLocation',
                HomePageURL: 'Y',
                IG_NA: 'Y',
                IG_Asia: 'Y',
                IG_Europe: 'Y',
                IG_APAC: 'Y'
            }
        });
        it('Create new URL positive test', function(done) {
            dbUtils.createNewWPTUrl(newURLDummyData, function(data) {
                data.should.be.ok;
                done();
            }, function(err) {}, correctDbConnection);
        });

        it('Create new URL negative test', function(done) {
            dbUtils.createNewWPTUrl(newURLDummyData, function(data) {}, function(err) {
                err.should.not.be.empty;
                done();
            }, inCorrectDbConnection);
        });
    });

    describe('Test fetchURLsByProperty method', function() {
        newURLDummyData = {}
        before(function(done) {
            newURLDummyData = {
                    PropertyName: 'DummyProp',
                    URL: 'http://www.w3schools.com/booststrap/bootstrap_ref_css_buttons.asp',
                    wptLocation: 'MyLocation',
                    HomePageURL: 'Y',
                    IG_NA: 'Y',
                    IG_Asia: 'Y',
                    IG_Europe: 'Y',
                    IG_APAC: 'Y'
                }
                //Create dummy data for testing
            dbUtils.createNewWPTUrl(newURLDummyData, function(data) {
                data.should.be.ok;
                newURLDummyData = data;
                done();
            }, function(err) {}, correctDbConnection);
        });

        it('Output data length should be 1', function(done) {
            dbUtils.fetchURLsByProperty('DummyProp', function(data, err) {
                (data.length).should.be.greaterThan(1);
                done();
            }, function(err) {}, correctDbConnection);
        });

        it('Output data length should be 0', function(done) {
            dbUtils.fetchURLsByProperty('UnknownProperty', function(data, err) {
                (data.length).should.be.exactly(0);
                done();
            }, function(err) {}, correctDbConnection);
        });

        it('Fetch URL by property name negative test', function(done) {
            dbUtils.fetchURLsByProperty('DummyProp', function(properties, err) {}, function(err) {
                err.should.not.be.empty;
                done();
            }, inCorrectDbConnection);
        });

        after(function() {
            dbUtils.deleteURLByID({
                "id": newURLDummyData.insertId
            }, function(properties, err) {}, function(err) {

            }, correctDbConnection);
        });
    });

    describe('Test fetchURLByID method', function() {
        newURLDummyData = {}
        before(function(done) {
            newURLDummyData = {
                    PropertyName: 'DummyProp',
                    URL: 'http://www.w3schools.com/booststrap/bootstrap_ref_css_buttons.asp',
                    wptLocation: 'MyLocation',
                    HomePageURL: 'Y',
                    IG_NA: 'Y',
                    IG_Asia: 'Y',
                    IG_Europe: 'Y',
                    IG_APAC: 'Y'
                }
                //Create dummy data for testing
            dbUtils.createNewWPTUrl(newURLDummyData, function(data) {
                newURLDummyData = data;
                done();
            }, function(err) {}, correctDbConnection);
        });

        it('Output data should not be empty', function(done) {
            dbUtils.fetchURLByID(newURLDummyData.insertId, function(data, err) {
                data.should.not.be.empty;
                done();
            }, function(err) {}, correctDbConnection);
        });

        it('Output data should be empty', function(done) {
            dbUtils.fetchURLByID((newURLDummyData.insertId + 1), function(data, err) {
                (data === undefined).should.be.true;
                done();
            }, function(err) {}, correctDbConnection);
        });

        it('Fetch URL by property name negative test', function(done) {
            dbUtils.fetchURLByID(newURLDummyData.insertId, function(properties, err) {}, function(err) {
                err.should.not.be.empty;
                done();
            }, inCorrectDbConnection);
        });

        after(function() {
            dbUtils.deleteURLByID({
                "id": newURLDummyData.insertId
            }, function(properties, err) {}, function(err) {

            }, correctDbConnection);
        });
    });
});
