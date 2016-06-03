let routeConfig: Function = function ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider): void {
  $stateProvider
    .state("state1", {
      url: "",
      template: "<todo-list> ahahha </todo-list>"
    });
};

routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

export { routeConfig };
