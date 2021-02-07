function pintarTareas(pListaTareas) {
    const pSection = document.querySelector('#listaTareas');
    pSection.innerHTML = '';

    for (let tarea of pListaTareas) {
        const nuevaTarea = pintarTarea(tarea);
        pSection.appendChild(nuevaTarea);
    }

}

function pintarTarea(pTarea) {
    let div = document.createElement('div');
    div.className =
        'mb-3 d-flex border align-middle border-dark justify-content-between align-content-center p-2';

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
    button.className = 'ml-3 btn btn-warning';
    button.innerText = 'Eliminar';

    button.addEventListener('click', (event) => {
        //Borrar a través del ID el array de tareas
        const indice = listaTareas.findIndex(tarea => {
            return tarea.id === pTarea.id
        });
        listaTareas.splice(indice, 1);
        localStorage.setItem('listaTareas', JSON.stringify(listaTareas))

        div.remove();
    });

    div.appendChild(p);
    div.appendChild(button);

    return div;
}


//Función filtrado por tipo
function filterPriority(pPrioridad) {
    let tipo = pPrioridad.target.value;
    let lista = renderFilteredList(tipo, listaTareas);

    tipo != '' ? pintarTareas(lista) : pintarTareas(listaTareas);
}

function renderFilteredList(tipo, listaTareas) {
    let renderFilteredList = listaTareas.filter(tarea => tarea.prioridad === tipo)

    return renderFilteredList;

}


//Función filtrado por nombre

function filterByName(pName, pListaTareas) {

    const listaTareasName = pListaTareas.filter(
        tarea => tarea.titulo.toLowerCase().includes(pName.toLowerCase())

    );
    return listaTareasName;
}

function getName(event) {
    let name = event.target.value;

    if (name !== "") {
        let newList = filterByName(name, listaTareas);
        pintarTareas(newList);
    } else {
        pintarTareas(listaTareas);
    }
}