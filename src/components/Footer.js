import { actions } from "../store";

function Footer({ todos, dispatch, filters, filter }) {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>
                    {todos.filter(todo => !todo.completed).length}
                </strong> item left</span>
            <ul className="filters">
                {Object.keys(filters).map(type =>
                    <li key={type}>
                        <a
                            className={filter === type ? 'selected' : ''}
                            href="/#"
                            onClick={() => dispatch(actions.switchFilter(type))}
                        >{type[0].toUpperCase() + type.slice(1)}</a>
                    </li>
                )}
            </ul>
            {todos.filter(filters.completed).length > 0 &&
                <button className="clear-completed"
                    onClick={() => dispatch(actions.clearCompleted())}
                >Clear completed</button>}
        </footer>
    );
}

export default Footer;