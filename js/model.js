 export default class Model{
    constructor() {
        this.View = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if (!this.todos || this.todos.length < 1) {
            this.todos = [
                {
                    id: 0,
                    title: 'Pablo',
                    description: 'Torrecillas',
                    completed: false,
                }
            ]
            this.currentId = 1;
        }else{
            this.currentId = this.todos[this.todos.length - 1].id + 1;
        }
    }
    
    addView(view) {
        this.view = view;
    }

    save(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    
    findTodo(id) {
        return this.todos.find((todo) => todo.id === id);
    }
    getTodos() {
        return this.todos.map((todo) => ({...todo}));
    }

    editTodo(id, values) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index === -1) {
            console.warn(`No se encontró ningún todo con id: ${id}`);
            return;
        }
        Object.assign(this.todos[index], values);
        this.save();
    }

    toggleCompleted(id) {
        const todo = this.findTodo(id);
    if (!todo) {
        console.warn(`No se encontró ningún todo con id: ${id}`);
        return;
    }
    todo.completed = !todo.completed; 
    this.save();
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
        this.save();
        return {...todo};
    }

    removeTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === id );
        this.todos.splice(index, 1);
        this.save();
    }   
}