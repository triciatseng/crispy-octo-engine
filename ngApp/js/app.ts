namespace app{
    angular.module('app',['ui.router','ngResource','ui.bootstrap'])
    .config((
      $stateProvider:ng.ui.IStateProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider,
      $locationProvider: ng.ILocationProvider
    ) => {
      $stateProvider.state('Home',{
        url:'/',
        templateUrl: '/templates/home.html',
        controller: app.controllers.HomeController,
        controllerAs: 'vm'
      }).state('Add',{
        url:'/add',
        templateUrl: '/templates/add.html',
        controller: 'AddController',
        controllerAs: 'vm'
      }).state('Update',{
        url:'update/:id',
        templateUrl: '/templates/update.html',
        controller: 'UpdateController',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    });
}
