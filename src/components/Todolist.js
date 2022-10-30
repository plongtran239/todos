import TodoItem from "./TodoItem";
import { actions } from "../store";

function Todolist({ todos, dispatch, filters, filter }) {
    return (
        <section className="main">
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                checked={todos.every(filters.completed) && 'checked'}
                onChange={(e) => dispatch(actions.toggleAllTodo(e.target.checked))}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todos.filter(filters[filter]).map((todo, index) => {
                    return (<TodoItem
                        key={index}
                        todo={todo}
                        index={index}
                    />)
                })}
            </ul>
        </section>
    );
}

export default Todolist;