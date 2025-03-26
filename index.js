document.addEventListener('DOMContentLoaded',function(){
    const title= document.getElementById('title');
    const description= document.getElementById('description');
    const alert = document.getElementById('alert');
    const btn= document.getElementById('add');
    const table= document.getElementById('table');
    let id=1;

    btn.onclick = addTodo;

    function removeTodo(id){
        document.getElementById(id).remove();
    }

    function addTodo(){
       if (title.value === '' || description.value ===''){
        alert.innerText = 'Title and description are required';
        return;
    }
    alert.classList.remove('d-none');
    const row = table.insertRow();
    row.setAtrribute('id', id++);
    row.innerHTML = `
    <td>${title.value}</td>
    <td>${description.value}</td>
    <td class="text-center">
        <input type="checkbox">
    </td>
    <td class="text-right">
        <button class="btn btn-primary mb-1">
            <i class="fa fa-pencil"></i>
        </button>
    </td>
    `;
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn', 'btn-danger');
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
    removeBtn.onclick = function (){
        removeTodo(row.getAttribute('id'));
    }
    row.children[3].appendChild(removeBtn);
}

});