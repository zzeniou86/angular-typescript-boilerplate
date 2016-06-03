interface Todos {
    text: string;
    done: boolean;
}

export class TodoListController {
    private todos:[Todos] = [
      {text:"learn angular", done: true},
      {text:"build an angular app", done: false}];
    private todoText:string;

    public addTodo():void {
      this.todos.push({text:this.todoText, done:false});
      this.todoText = "";
    };

    public remaining():number {
      let count:number = 0;
      angular.forEach(this.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    public archive():void {
      let oldTodos:[Todos] = this.todos;
      this.todos = [] as [Todos];
      angular.forEach(oldTodos, function(todo: Todos):void {
        if (!todo.done) { this.todos.push(todo);};
      });
    };
  }