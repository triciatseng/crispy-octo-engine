"use strict";

let controller = require('../../api/carController');
let should = require('should');
let http_mocks = require('node-mocks-http');
let db = require('../../models/db');
let utils = require('../helpers/utils');

function buildResponse() {
  return http_mocks.createResponse({
    eventEmitter: require('events').EventEmitter
  });
}

describe('Car Controller', () => {
  describe('getAll()', () => {
    before((done) => {
      utils.resetDB();
      done();
    });
      it('Should return an array', (done) => {
        let response = buildResponse();

        let request = http_mocks.createRequest({
          method: 'GET',
          url: '/api/v1/cars'
        });

        response.on('end', () => {
          JSON.parse(response._getData()).should.be.an.instanceOf(Array);
          done();
        });

        controller.getAll(request, response, function() {});
      });
      it('Should return 5 cars in the array', (done) => {
        let response = buildResponse();

        let request = http_mocks.createRequest({
          method: 'GET',
          url: '/api/v1/cars'
        });

        response.on('end',() => {
          JSON.parse(response._getData()).length.should.equal(5);
          done();
        });

        controller.getAll(request,response,function(){});
      });
  });
  describe('create()',() => {
    before((done) => {
      utils.resetDB();
      done();
    });
    it('Should call next function with an error, if no body', (done) => {
      let response = buildResponse();

      let request = http_mocks.createRequest({
        method: 'POST',
        url: '/api/v1/cars'
      });

      response.on('end',() => {
        throw new Error('Did not call the next function');
      });

      let next = function(ex) {
        should.exist(ex);
        done();
      };
      controller.create(request,response,next);
    });
    it('Should return a 200 with the obj back', (done) => {
      let response = buildResponse();

      let request = http_mocks.createRequest({
        method: 'POST',
        url: '/api/v1/cars',
        body: {
          image: 'image url',
          make: 'test make',
          model: 'test model',
          description: 'test description',
          year: 2016,
          color: 'test color',
          isNew: true,
          numDoors: 2,
          worth: 'test worth'
        }
      });

      let next = function(ex){
        throw new Error(ex);
      };

      response.on('end', () => {
        let data = JSON.parse(response._getData());
        should.exist(data._id);
        response.statusCode.should.equal(200);
        data.image.should.equal('image url');
        data.make.should.equal('test make');
        data.model.should.equal('test model');
        data.description.should.equal('test description');
        data.year.should.equal(2016);
        data.color.should.equal('test color');
        data.isNew.should.equal(true);
        data.numDoors.should.equal(2);
        data.worth.should.equal('test worth');
        done();
      });

      controller.create(request, response, next);
    });
    it('Should have added the car into the cars db', (done) => {
      db.default.cars.length.should.equal(6);
      db.default.cars[5].image.should.equal('image url');
      db.default.cars[5].make.should.equal('test make');
      db.default.cars[5].model.should.equal('test model');
      db.default.cars[5].description.should.equal('test description');
      db.default.cars[5].year.should.equal(2016);
      db.default.cars[5].color.should.equal('test color');
      db.default.cars[5].isNew.should.equal(true);
      db.default.cars[5].numDoors.should.equal(2);
      db.default.cars[5].worth.should.equal('test worth');
      done();
    });
  });
});
