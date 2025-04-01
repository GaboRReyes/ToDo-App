class Model{
    constructor() {
        this.View = null;
        this.todos = [];
    }
    
    addView(view) {
        this.view = view;
    }
    
    getTodos() {
        return this.todos;
    }
    
    adddTodo(todo) {
        console.log(todo);
    }
}