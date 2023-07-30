import html from '../core.js';
import { connect } from '../store.js';

function TodoItem({ todo, index, editIndex }) {
    return html`
        <li class="${todo.completed && 'completed'} ${editIndex === index && 'editing'}">
            <div class="view">
                <input class="toggle" type="checkbox" ${todo.completed && 'checked'} onchange="dispatch('toggle',${index})" />
                <label ondblclick="dispatch('startEdit', ${index})">${todo.title}</label>
                <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
            </div>
            <input
                class="edit"
                value="${todo.title}"
                onblur="this.value.trim() !=='' && dispatch('saveEdit', this.value.trim())"
                onkeyup="(event.keyCode === 13 && this.value.trim() !=='' && dispatch('saveEdit', this.value.trim())) || (event.keyCode === 27 && this.value.trim() !=='' && dispatch('saveEdit', '${todo.title}'))"
            />
        </li>
    `;
}

export default connect()(TodoItem);
