import * as express from 'express';
import Car from '../models/Car';
import db from '../models/db';

// let cars: Array<app.i.ICar> = [];

// seedCars(cars);

export function getAll(req:express.Request,res:express.Response,next: Function){
  res.json(db.cars); //status code of 200, take array of cars and put into json
}

export function getOne(req:express.Request,res:express.Response,next:Function){

}

export function create(req:express.Request, res:express.Response,next:Function){
  try {
    let car = new Car(<app.i.ICar>req.body);
    db.cars.push(car);
    res.json(car);
  } catch (ex) {
    next(ex);
  }
}

export function update(req:express.Request, res:express.Response,next:Function){

}

export function remove(req:express.Request, res:express.Response,next:Function){

}
// export function seedCars(cars: Array<app.i.ICar>){
//   //image,make,model,description,year,color,isNew,worth,numDoors
//   cars.push(new Car('http://www.toyotareference.com/colors/camry/toyota_camry_02_6S7_02.jpg','Toyota','Camry','my first car',2002,'Green',false,'10k',4));
//   cars.push(new Car('http://sp.dlron.us/photo/pix320/sscusa/acura/mdx/2016/5od-4/sideview.jpg','Acura','MDX','my current car',2016,'Black',true,'40k',4));
//   cars.push(new Car('http://www.usedcarsgroup.com/2000-ford-expedition-sanford-fl-i4806361862076116651-2.jpg','Ford','Expedition','i learned how to drive using this car',2000,'Green',false,'5,000',4));
//   cars.push(new Car('http://www.usedcarsgroup.com/2008-volkswagen-jetta-west_seneca-ny-i3745166321341996032-2.jpg','Volkswagen','Jetta','my previous car',2008,'Silver',false,'$9,000',4));
//   cars.push(new Car('https://upload.wikimedia.org/wikipedia/commons/6/67/2010_Lexus_RX350_1_--_01-13-2010.jpg','Lexus','RX350','everyone has this car',2010,'Silver',false,'30k',4));
// }
