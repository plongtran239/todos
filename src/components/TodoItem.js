import { actions } from "../store";
// import { useRef } from "react";
import { useStore } from "../store";

function TodoItem({ todo, index }) {
    const [state, dispatch] = useStore()
    const { todoInput, editIndex } = state

    let className = todo.completed ? 'completed' : ""

    if (editIndex === index) {
        className += ' editing'
    }

    const hanldeEdit = () => {
        dispatch(actions.startEdit(index))
    }
    const handleStopEdit = (e) => {
        if (e.keyCode === 27) {
            dispatch(actions.stopEdit())
        }
        if (e.keyCode === 13) {
            dispatch(actions.endEdit(e.target.value.trim()))
        }
    }
    return (
        <li className={className}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed && 'checked'}
                    onChange={() => dispatch(actions.toggleTodo(index))}
                />
                <label
                    onDoubleClick={() => hanldeEdit()}
                >{todo.title}</label>
                <button className="destroy" onClick={() => dispatch(actions.deleteTodo(index))} ></button>
            </div>
            <input
                value={todoInput}
                className="edit"
                onChange={(e) => dispatch(actions.setTodo(e.target.value))}
                onKeyUp={e => handleStopEdit(e)}
                onBlur={e => dispatch(actions.endEdit(e.target.value.trim()))}
            />
        </li>
    );
}

export default TodoItem;