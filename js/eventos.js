const lista = document.querySelector('#listaTareas');
const btnGuardar = document.getElementById('btnGuardar');
const inputTarea = document.getElementById('inputTarea');
const prioridad = document.getElementById('prioridad');

let identificador = 2;

// Acciones cuando arranca la página
pintarTareas(listaTareas, lista);

// Eventos
btnGuardar.addEventListener('click', (event) => {
    listaTareas.push({
        titulo: inputTarea.value,
        prioridad: prioridad.value,
        id: identificador++
    });
    lista.innerHTML = '';
    pintarTareas(listaTareas, lista);
});

