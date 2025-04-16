 export default class Model{
    constructor() {
        this.View = null;
        this.todos = [];
        this.currentId = 1;
    }
    
    addView(view) {
        this.view = view;
    }
    
    getTodos() {
        return this.todos;
    }
    
    adddTodo(todo) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false
        }
        this.todos.push(todo);
        return {...todo};
    }
}