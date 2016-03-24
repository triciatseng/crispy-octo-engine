import * as express from 'express';
import Car from '../models/Car';
import db from '../models/db';

export function getAll(req: express.Request, res: express.Response, next: Function) {
  res.json(db.cars);
}

export function getOne(req: express.Request, res: express.Response, next: Function) {
  let car = db.cars.filter((c) => c._id === req.params.id)[0];
  if(!car) return next({ status: 404, message: "Could not find the car you requested." });

  res.json(car);
}

export function create(req: express.Request, res: express.Response, next: Function) {
  // the car from the service is in req.body
  try {
    let car = new Car(<app.i.ICar>req.body);
    db.cars.push(car);
    res.json(car);
  } catch (ex) {
    next(ex);
  }
}

export function update(req: express.Request, res: express.Response, next: Function) {
  let car = db.cars.filter((c) => c._id === req.params.id)[0];
  if(!car) return next({ status: 404, message: 'Could not find the car you requested.' });

  if(req.body.image) car.image = req.body.image;
  if(req.body.make) car.make = req.body.make;
  if(req.body.model) car.model = req.body.model;
  if(req.body.color) car.color = req.body.color;
  if(req.body.year) car.year = req.body.year;
  if(req.body.worth) car.worth = req.body.worth;
  if(req.body.numDoors) car.numDoors = req.body.numDoors;
  if(req.body.description) car.description = req.body.description;
  if(req.body.isNew) car.isNew = req.body.isNew;

  res.json(car);
}

export function remove(req: express.Request, res: express.Response, next: Function) {
  let car = db.cars.filter((c) => c._id === req.params.id)[0];
  if(!car) return next({ status: 404, message: 'Could not find the car you requested.' });

  db.cars.splice(db.cars.indexOf(car), 1);
  res.json({ message: 'Removed the car from the database.' });
}
