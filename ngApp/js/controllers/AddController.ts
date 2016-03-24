namespace app.Controllers{
  export class AddController{
    public car: app.i.ICar = {_id: null,image:'',make:'',model:'',description:'',year: undefined,color:'',isNew: undefined,numDoors: undefined,worth:''};

    public addCar(){
      this.CarService.create(this.car).then((res)=>{
          this.$state.go('Home');
      }, (err)=>{
        alert(err);
      })
    }

    constructor(private CarService:app.services.CarService,private $state:ng.ui.IStateService){

    }
  }
  angular.module('app').controller('AddController',AddController);
}
