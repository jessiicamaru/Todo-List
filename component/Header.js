import html from '../core.js';

function Header() {
    return html`
        <header class="header">
            <h1>todos</h1>
            <input
                class="new-todo"
                onkeyup="event.keyCode === 13 && this.value.trim() !=='' && dispatch('add', this.value.trim())"
                placeholder="What needs to be done?"
                autofocus
            />
        </header>
    `;
}

export default Header;
