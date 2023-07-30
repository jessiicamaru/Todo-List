import storage from './until/storage.js';

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed,
    },
    editIndex: null,
};

const actions = {
    add({ todos }, title) {
        todos.push({ title, completed: false });
        storage.set(todos);
    },
    toggle({ todos }, index) {
        const todo = todos[index];
        todo.completed = !todo.completed;
        storage.set(todos);
    },
    toggleAll({ todos }, isChecked) {
        todos.forEach((todo) => (todo.completed = isChecked));
        storage.set(todos);
    },
    destroy({ todos }, index) {
        todos.splice(index, 1);
        storage.set(todos);
    },
    clearCompleted({ todos }) {
        todos.forEach((todo) => (todo.completed = false));
        storage.set(todos);
    },
    switchFillter(state, type) {
        state.filter = type;
        storage.set(state.todos);
    },
    startEdit(state, index) {
        if (state.editIndex === null) {
            state.editIndex = index;
        }
        storage.set(state.todos);
    },
    saveEdit(state, title) {
        if (state.editIndex !== null) {
            console.log(title);
            state.todos[state.editIndex].title = title;
            state.editIndex = null;
            storage.set(state.todos);
        }
    },
};

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, args);
    return state;
}
