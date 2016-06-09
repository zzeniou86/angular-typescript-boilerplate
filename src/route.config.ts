let routeConfig: Function = function ($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider): void {
  $stateProvider
    .state("default", {
     url: "",
     component: "todoList"
    });
};

routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

export { routeConfig };
