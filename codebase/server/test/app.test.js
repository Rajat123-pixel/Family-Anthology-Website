const request = require('supertest');
const chai = require('chai');
const app = require('../app');
const expect = chai.expect;

describe('GET /', () => {
    it('should return Hello, World!', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.equal('Hello, World!');
                done();
            });
    });
});