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

    pintarTareas(listaTareas);
});



//Filtrar por prioridad
filterTodo.addEventListener('change', filterPriority);

//Filtrar por nombre
filterNombre.addEventListener('keydown', getName);