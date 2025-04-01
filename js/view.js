export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        const btn = document.getElementById('add');
        btn.onclick = function () {
            this.addTodo('Titulo', 'Descripcion');
        }
    }

    setModel(model) {
        this.model = model;
    }

    addTodo(title, description) {
        console.log(title, description);
    }
}