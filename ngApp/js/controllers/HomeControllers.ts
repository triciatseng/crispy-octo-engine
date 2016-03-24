namespace app.controllers {
  export class HomeController{
    public cars=[];

    public openModal(e:app.i.ICar){
      this.$uibModal.open({
        controller: 'EntryModalInstanceController as modal',
        templateUrl: '/templates/partials/modal.html',
        animation: true,
        resolve:{
          entry: e
        }
      })
    }

    constructor(private CarService: app.services.CarService,private $uibModal: ng.ui.bootstrap.IModalService){
      this.cars = CarService.getAll();
    }
  }
  angular.module('app').controller('HomeController',HomeController);

  export class EntryModalInstanceController{
    public cancel(){
      this.$uibModalInstance.dismiss();
    }

    constructor(private entry:app.i.ICar,
      private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance){
    }
  }
  angular.module('app').controller('EntryModalInstanceController',EntryModalInstanceController);
}
