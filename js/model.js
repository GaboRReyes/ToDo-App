 export default class Model{
    constructor() {
        this.View = null;
        this.todos = [];
        this.currentId = 1;
    }
    
    addView(view) {
        this.view = view;
    }
    
    findTodo(id) {
        return this.todos.find((todo) => todo.id === id);
    }
    getTodos() {
        return this.todos;
    }

    toggleCompleted(id) {
        const todo = this.findTodo(id);
    if (!todo) {
        console.warn(`No se encontró ningún todo con id: ${id}`);
        return;
    }
    todo.completed = !todo.completed; 
    } 
    
    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false
        }
        this.todos.push(todo);
        console.log(this.todos);
        return {...todo};
    }

    removeTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === id );
        this.todos.splice(index, 1);
    }   
}