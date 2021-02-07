const btnGuardar = document.getElementById('btnGuardar');
const inputTarea = document.getElementById('inputTarea');
const prioridad = document.getElementById('prioridad');
const filterTodo = document.getElementById('filterTodo');
const filterNombre = document.getElementById('todoInput');
let identificador = 2;

// Acciones cuando arranca la página
pintarTareas(listaTareas);

// Eventos
btnGuardar.addEventListener('click', (event) => {
    listaTareas.push({
        titulo: inputTarea.value,
        prioridad: prioridad.value,
        id: identificador++
    });

    localStorage.setItem('listaTareas', JSON.stringify(listaTareas))

    pintarTareas(listaTareas);
});



//Filtrar por prioridad
filterTodo.addEventListener('change', filterPriority);

//Filtrar por nombre
filterNombre.addEventListener('keyup', getName);


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('listaTareas')) {
        listaTareas = JSON.parse(localStorage.getItem('listaTareas'))
    }
    pintarTareas(listaTareas);
})