import { TodoComponent } from "./app/todo";
import { routeConfig } from "./route.config";

angular.module("app", ["ngAnimate", "ngAria", "ngMaterial", "ui.router", TodoComponent])
  .config(routeConfig);

angular.bootstrap(document, ["app"], {
  strictDi: true
});
