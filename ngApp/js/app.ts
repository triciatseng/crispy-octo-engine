namespace app{
    angular.module('app',['ui.router','ngResource'])
    .config((
      $stateProvider:ng.ui.IStateProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider,
      $locationProvider: ng.ILocationProvider
    ) => {
      $stateProvider.state('Home',{
        url:'/',
        templateUrl: '/templates/home.html'
      }).state('About',{
        url:'/about',
        templateUrl: '/templates/about.html'
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    });
}
