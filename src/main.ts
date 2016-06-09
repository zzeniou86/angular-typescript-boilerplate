import { TodoComponent } from "./app/todo";
import { routeConfig } from "./route.config";

interface Component {
    name?: string;
};

angular.module("app", ["ngAnimate",
                        "ngAria",
                        "ngMaterial",
                        "ui.router",
                        (TodoComponent as Component).name
                        ])
  .config(routeConfig);

angular.bootstrap(document, ["app"], {
  strictDi: true
});
