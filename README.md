# Minhas tarefas

Aplicação web simples para organizar tarefas do dia a dia. A interface permite cadastrar atividades, acompanhar seu status e manter uma lista de tarefas em uma única página.

## Executar

Não é necessário instalar dependências. Abra o arquivo `index.html` em um navegador moderno.

## Funcionalidades

| Requisito | Funcionalidade | Situação atual |
| --- | --- | --- |
| RF01 | Cadastrar tarefas com título não vazio | Implementado |
| RF02 | Listar as tarefas cadastradas | Implementado |
| RF03 | Marcar uma tarefa como concluída | Implementado |
| RF04 | Reabrir uma tarefa concluída | Implementado |
| RF05 | Excluir uma tarefa | Implementado |
| RF06 | Filtrar entre todas, pendentes e concluídas | Pendente |
| RF07 | Preservar tarefas no `localStorage` após atualizar a página | Pendente |
| RF08 | Exibir a quantidade de tarefas pendentes | Implementado |

Também é possível editar o título de uma tarefa. Os dados ficam somente em memória nesta versão e são apagados ao atualizar ou fechar a página.

## Interface

A página é dividida em três áreas:

- **Cabeçalho:** nome da aplicação, texto de apresentação e contador de tarefas pendentes.
- **Cadastro:** campo de texto e botão para adicionar uma tarefa.
- **Listagem:** tarefas com opções para concluir, reabrir, editar ou excluir.

O layout é responsivo e se adapta a telas menores.

## Estrutura do projeto

```text
.
├── index.html
├── app.js
├── style.css
└── icons/
```

- `index.html`: estrutura da página.
- `style.css`: estilos e comportamento responsivo.
- `app.js`: cadastro, edição, conclusão, exclusão, renderização e contador.
- `icons/`: ícones usados nos botões de ação.

## Dados de uma tarefa

Atualmente, cada tarefa é representada no JavaScript por um objeto com estas propriedades:

| Propriedade | Tipo | Descrição |
| --- | --- | --- |
| `id` | Number | Identificador da tarefa |
| `titulo` | String | Texto da tarefa |
| `completada` | Boolean | Indica se a tarefa foi concluída |
| `editando` | Boolean | Indica se o título está em edição |
| `criadaEm` | String | Data e hora de criação |

## Requisitos técnicos do projeto

O projeto utiliza JavaScript puro, sem frameworks, e foi pensado para navegadores modernos. Para completar o escopo funcional definido, ainda é necessário implementar os filtros de status e a persistência dos dados com `localStorage`.
