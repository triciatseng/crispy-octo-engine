let uuid = require('uuid');

export default class Car implements app.i.ICar{
  public _id: string;
  /**
   * url holding the image of the car
   * @type {string}
   */
  public image: string;
  public make: string;
  public model: string;
  public description: string;
  public year: number;
  public color: string;
  public isNew: boolean;
  /**
   * Standard is 2 or 4
   * @type {number}
   */
  public numDoors: number;
  public worth: string;

  constructor(obj_image: (string | app.i.ICar), make: string, model: string, description: string, year: number, color: string, isNew: boolean, worth: string, numDoors: number){
    this._id = uuid.v4();

    if(typeof obj_image === 'object'){
      if(!obj_image.image) throw new Error('The image property is required for this vehicle.');
      if(!obj_image.make) throw new Error('The make property is required for this vehicle.');
      if(!obj_image.model) throw new Error('The model property is required for this vehicle.');
      if(!obj_image.description) throw new Error('The description property is required for this vehicle.');
      if(!obj_image.year) throw new Error('The year property is required for this vehicle.');
      if(!obj_image.color) throw new Error('The color property is required for this vehicle.');
      if(!obj_image.isNew) throw new Error('The isNew property is required for this vehicle.');
      if(!obj_image.worth) throw new Error('The worth property is required for this vehicle.');
      if(!obj_image.numDoors) throw new Error('The numDoors property is required for this vehicle.');


      this.image = obj_image.image;
      this.make = make;
      this.model = model;
      this.description = description;
      this.year = parseInt(year.toString());
      this.color = color;
      this.isNew = isNew;
      this.worth = worth;
      this.numDoors = numDoors;
    } else {
      if(!obj_image) throw new Error('The image property is required for this vehicle.');
      if(!make) throw new Error('The make property is required for this vehicle.');
      if(!model) throw new Error('The model property is required for this vehicle.');
      if(!description) throw new Error('The description property is required for this vehicle.');
      if(!year) throw new Error('The year property is required for this vehicle.');
      if(!color) throw new Error('The color property is required for this vehicle.');
      if(!isNew) throw new Error('The isNew property is required for this vehicle.');
      if(!worth) throw new Error('The worth property is required for this vehicle.');
      if(!numDoors) throw new Error('The numDoors property is required for this vehicle.');


      this.image = obj_image;
      this.make = make;
      this.model = model;
      this.description = description;
      this.year = parseInt(year.toString());
      this.color = color;
      this.isNew = isNew;
      this.worth = worth;
      this.numDoors = numDoors;
    }
  }
}
