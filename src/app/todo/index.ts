import {TodoListController} from "./todo.controller";

let name: string = "todo.component";
angular.module(name, [])
    .component("todoList", {
        controller: TodoListController,
        templateUrl: "views/todo.template.html"
    });

export { name as TodoComponent };

