namespace app.services{
  interface ICarResourceClass extends ng.resource.IResource<ICarResourceClass>, app.i.ICar{};
  interface ICarResource extends ng.resource.IResourceClass<ICarResourceClass> {};

  export class CarService{
      private CarResource: ICarResource;

      constructor(private $resource: ng.resource.IResourceService){
        this.CarResource = <ICarResource>$resource('/api/cars/:id');
      }
  }
  angular.module('app').service('CarService',CarService);
}
