const tarefas = [];
const tarefaContainer = document.getElementById('tarefas');
const contadorContainer = document.getElementById('contador');

function adicionarTarefa() {
    const input = document.getElementById('nova-tarefa');
    const titulo = input.value.trim(); 
    if (titulo === "") return;

    const novaTarefa = {
        id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1, 
        titulo: titulo,
        completada: false,
        editando: false,
        criadaEm: new Date().toLocaleString()
    };
    
    tarefas.push(novaTarefa);
    input.value = ''; 
    renderizarTarefas();
}

function excluirTarefa(id) {
    const index = tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
        tarefas.splice(index, 1);
        renderizarTarefas();
    }
}

function alternaModoEdicao(id) {
    const index = tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
        tarefas[index].editando = !tarefas[index].editando;
        renderizarTarefas();
    }
}

function salvarEdicao(id) {
    const index = tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
        const inputEdicao = document.getElementById(`input-edit-${id}`);
        const novoTitulo = inputEdicao.value.trim();
        if (novoTitulo !== "") {
            tarefas[index].titulo = novoTitulo;
            tarefas[index].editando = false; 
            renderizarTarefas();
        }
    }
}

function editarTarefa(id) {
    alternaModoEdicao(id);
}

function toggleTarefa(id) {
    const index = tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
        tarefas[index].completada = !tarefas[index].completada;
        renderizarTarefas();
    }
}

function renderizarTarefas() {
    contadorContainer.innerHTML = contadorTarefas();
    tarefaContainer.innerHTML = tarefas.map(mostrarTarefas).join('');
}

function mostrarTarefas(tarefaItem) {
    titulo.textContent = tarefaItem.titulo;

    if (tarefaItem.editando) {
        return `
        <article>
            <input type="text" id="input-edit-${tarefaItem.id}" value="${tarefaItem.titulo}">
            <button class="btn-salvar" onclick="salvarEdicao(${tarefaItem.id})">
                <img src="icons/icons8-save-30.png" alt="Salvar Edição">
            </button>
            <button class="btn-cancelar" onclick="alternaModoEdicao(${tarefaItem.id})">
                <img src="icons/icons8-cancel-30.png" alt="Cancelar Edição">
            </button>
        </article>`;
    }

    return `
    <article>
        <input type="checkbox" ${tarefaItem.completada ? 'checked' : ''} 
            onclick="toggleTarefa(${tarefaItem.id})">
        <h3 style="${tarefaItem.completada ? 'text-decoration: line-through;' : ''}">
        ${tarefaItem.titulo}</h3>
        <button class="btn-apagar" onclick="excluirTarefa(${tarefaItem.id})">
            <img src="icons/icons8-delete-30.png" alt="Apagar Tarefa">
        </button>
        <button class="btn-editar" onclick="editarTarefa(${tarefaItem.id})">
            <img src="icons/icons8-edit-pencil-30.png" alt="Editar Tarefa">
        </button>
    </article>`;
}

function contadorTarefas() {
    const tarefasPendentes = tarefas.filter(t => !t.completada).length;
    return `<p>${tarefasPendentes} tarefas pendentes </p>`;
}

renderizarTarefas();
