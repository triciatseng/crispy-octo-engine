'use strict';
let request = require('supertest');
let should = require('should');
let server = require('../../app');
let utils = require('../helpers/utils');

describe('Car Routes',() => {
  beforeEach((done) => {
    utils.resetDB();
    done();
  });
  describe('GET /api/v1/cars', () => {
    it('Should return an array', (done) => {
      request(server)
        .get('/api/v1/cars')
        .expect(200)
        .expect((res) => {
          res.body.should.be.an.instanceOf(Array);
        })
        .end(done);
    });
    it('should return 5 cars', (done) => {
      request(server)
        .get('/api/v1/cars')
        .expect(200)
        .expect((res) => {
          res.body.length.should.equal(5);
        })
        .end(done);
    });
  });
  describe('POST /api/v1/cars', () => {
    it('Should return a 500 with no body', (done) => {
      request(server)
        .post('/api/v1/cars')
        .expect(500)
        .end(done);
    });
    it('Should return a 200 with a body, and the object', (done) => {
      let car = {
        image: 'image url',
        make: 'test make',
        model: 'test model',
        description: 'test description',
        year: 2016,
        color: 'test color',
        isNew: true,
        numDoors: 2,
        worth: 'test worth'}
      request(server)
        .post('/api/v1/cars')
        .send(car)
        .expect(200)
        .expect((res) => {
          should.exist(res.body._id);
          res.body.image.should.equal('image url');
          res.body.make.should.equal('test make');
          res.body.model.should.equal('test model');
          res.body.description.should.equal('test description');
          res.body.year.should.equal(2016);
          res.body.color.should.equal('test color');
          res.body.isNew.should.equal(true);
          res.body.numDoors.should.equal(2);
          res.body.worth.should.equal('test worth');
        })
        .end(done);
    });
  });
});
