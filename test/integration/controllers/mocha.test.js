var request = require('supertest'),
    should = require('should'),
    assert = require('assert');

describe('Mocha Tests', function () {

    before(function (done) {
        done(null, sails);
    });

    it('should get a list of meals', function (done) {
        request(sails.hooks.http.app)
            .get('/meals')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                should.exist(res.body);
                done();
            });
    });
});