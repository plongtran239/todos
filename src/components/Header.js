import { useRef } from "react";
import { actions } from "../store";

function Header({ dispatch, todoInput, editIndex }) {
    const inputRef = useRef()

    const handleAdd = (e) => {
        if (e.keyCode === 13) {
            dispatch(actions.addTodo(todoInput.trim()));
            dispatch(actions.setTodo(""));
            inputRef.current.focus();
        }
    }

    return (
        <header className="header">
            <h1>TODOS</h1>
            <input
                ref={inputRef}
                type="text"
                className="new-todo"
                placeholder="What needs to be done?"
                value={editIndex === null ? todoInput : ''}
                autoFocus
                onChange={(e) => {
                    dispatch(actions.setTodo(e.target.value));
                }}
                onKeyUp={(e) => handleAdd(e)}
            />
        </header>
    );
}

export default Header;