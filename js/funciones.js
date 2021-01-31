const formulario = document.getElementById('formulario');
const input = document.getElementById('input');
const taskList = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()


let tareas = {
    0: {
        id: 0,
        texto: 'Estudiar Javascript',
        prioridad: 'urgente',
        estado: false,
    },

    1: {
        id: 1,
        texto: 'dormir',
        prioridad: 'diaria',
        estado: false,
    },

    2: {
        id: 2,
        texto: 'Salir a comer',
        prioridad: 'mensual',
        estado: false,
    }

};

formulario.addEventListener('submit', evento => {
    evento.preventDefault()

    console.log(input.value)

    setTarea(evento)
});

const setTarea = evento => {
    if (input.value.trim() === '') {
        console.log('esta vacio')
        return
    };


    const tarea =
    {

        id: Date.now(),
        texto: input.value,
        prioridad: 'urgente',
        estado: false,

    }

    tareas[tarea.id] = tarea


    // console.log('tarea')
    formulario.reset();
    input.focus();

    pintarTareas()
}

const pintarTareas = () => {
    Object.values(tareas).forEach(tarea => {
        console.log(tarea)

    });
}