"use strict";
const chai = require('chai');
const chaiHttp = require('chai-http');
const App_1 = require('../src/App');
chai.use(chaiHttp);
const expect = chai.expect;
describe('GET api/v1/associates', () => {
    it('responds with JSON array', () => {
        return chai.request(App_1.default).get('/api/v1/associates')
            .then(res => {
            expect(res.status).to.equal(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.length(2);
        });
    });
    it('should include Wolverine', () => {
        return chai.request(App_1.default).get('/api/v1/associates')
            .then(res => {
            let Wolverine = res.body.find(hero => hero.name === 'Brian Cox');
            expect(Wolverine).to.exist;
            expect(Wolverine).to.have.all.keys([
                'id',
                'name',
                'titles',
                'occupation',
                'gender',
                'height',
                'hair',
                'eyes',
                'urlPhoto',
                'rating',
            ]);
        });
    });
    describe('GET api/v1/associates/:id', () => {
        it('responds with single JSON object', () => {
            return chai.request(App_1.default).get('/api/v1/associates/2')
                .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
            });
        });
        it('should return Michael Jordan', () => {
            return chai.request(App_1.default).get('/api/v1/associates/2')
                .then(res => {
                expect(res.body.hero.name).to.equal('Michael Jordan');
            });
        });
    });
});
