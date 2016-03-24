namespace app.services{
  interface ICarResourceClass extends ng.resource.IResource<ICarResourceClass>, app.i.ICar{};
  interface ICarResource extends ng.resource.IResourceClass<ICarResourceClass> {};

  export class CarService{
      private CarResource: ng.resource.IResourceClass<ng.resource.IResource<any>>;

      public getAll(){
        return this.CarResource.query();
      }

      public create(car:app.i.ICar){
        return this.CarResource.save(car).$promise;
      }
      constructor(private $resource: ng.resource.IResourceService){
        this.CarResource = <ICarResource>$resource('/api/v1/cars/:id');
      }
  }
  angular.module('app').service('CarService',CarService);
}
