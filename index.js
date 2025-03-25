document.addEventListener('DOMContentLoaded',function(){
    const title= document.getElementById('title');
    const description= document.getElementById('description');
    const btn= document.getElementById('add');
    const table= document.getElementById('table');

    btn.onclick = addTodo;

    function addTodo(){
       if (title.value === '' || description.value ===''){
        console.error('Title and description are recquired')
       } else{
        console.log('Ok')
       }
    }
})
