function pintarTareas(pListaTareas, pSection) {
    for (let tarea of pListaTareas) {
        const nuevaTarea = pintarTarea(tarea);
        pSection.appendChild(nuevaTarea);
    }

}

function pintarTarea(pTarea) {
    let div = document.createElement('div');
    // div.classList.add(pTarea.prioridad);
    switch (pTarea.prioridad) {
        case 'urgente':
            div.style.backgroundColor = 'tomato';
            break;
        case 'diario':
            div.style.backgroundColor = 'lightyellow';
            break;
        case 'mensual':
            div.style.backgroundColor = 'lightgreen';
            break;
    }

    let p = document.createElement('p');
    p.innerText = pTarea.titulo;

    let button = document.createElement('button');
    button.innerText = 'Eliminar';

    button.addEventListener('click', (event) => {
        //Borrar a través del ID el array de tareas
        const indice = listaTareas.findIndex(tarea => {
            return tarea.id === pTarea.id
        });
        listaTareas.splice(indice, 1);
        div.remove();
    });

    div.appendChild(p);
    div.appendChild(button);

    return div;
}