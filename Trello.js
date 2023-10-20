const tarefas = document.querySelectorAll('.tarefa');
const colunas = document.querySelectorAll('.coluna');

let tarefaArrastada = null;

tarefas.forEach(tarefa => {
    tarefa.addEventListener('dragstart', iniciarArrasto);
    tarefa.addEventListener('dragend', finalizarArrasto);
});

colunas.forEach(coluna => {
    coluna.addEventListener('dragover', permitirSoltar);
    coluna.addEventListener('drop', soltarTarefa);
});

function iniciarArrasto(event) {
    tarefaArrastada = this;
    this.classList.add('tarefa-arrastando');
}

function finalizarArrasto(event) {
    this.classList.remove('tarefa-arrastando');
}

function permitirSoltar(event) {
    event.preventDefault();
}

function soltarTarefa(event) {
    event.preventDefault();
    if (tarefaArrastada) {
        const colunaDestino = this;
        colunaDestino.querySelector('.tarefas').appendChild(tarefaArrastada);
        tarefaArrastada = null;
    }
}

const formAdicionarTarefa = document.getElementById('adicionar-tarefa');

formAdicionarTarefa.addEventListener('submit', adicionarTarefa);

function adicionarTarefa(event) {
    event.preventDefault();
    const novaTarefa = document.getElementById('nova-tarefa').value;
    if (novaTarefa) {
        const novaTarefaElemento = document.createElement('li');
        novaTarefaElemento.innerHTML = novaTarefa;
        novaTarefaElemento.draggable = true;
        novaTarefaElemento.classList.add('tarefa');
        novaTarefaElemento.addEventListener('dragstart', iniciarArrasto);
        novaTarefaElemento.addEventListener('dragend', finalizarArrasto);
        
        document.getElementById('tarefa-fazer').appendChild(novaTarefaElemento);
        document.getElementById('nova-tarefa').value = '';
    }
}
