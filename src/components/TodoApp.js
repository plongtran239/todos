import Header from "./Header";
import Todolist from "./Todolist";
import Footer from "./Footer";

import { useStore } from "../store";

function TodoApp() {
    const [state, dispatch] = useStore();
    const { todos, todoInput, editIndex, filters, filter } = state;
    return (
        <section className="todoapp">
            <Header dispatch={dispatch} todoInput={todoInput} editIndex={editIndex} />
            {todos.length > 0 ? <Todolist todos={todos} dispatch={dispatch} filter={filter} filters={filters} /> : undefined}
            {todos.length > 0 ? <Footer todos={todos} dispatch={dispatch} filter={filter} filters={filters} /> : undefined}
        </section>
    );
}

export default TodoApp;