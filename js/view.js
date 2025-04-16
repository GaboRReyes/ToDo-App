import AddTodo from './componenets/add-todo.js';

export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();

        btn.onclick = () =>    this.addTodo('Titulo', 'Descripcion');
        
    }

    setModel(model) {
        this.model = model;
    }

    addTodo(title, description) {
        this.model.addTodo(title, description);
    }
}