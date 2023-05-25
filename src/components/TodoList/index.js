import {MdDelete} from "react-icons/md";
import React from "react";

const TodoList = ({todos, onToggle, onRemove }) => {
    return (
        <ul className='todo-list'>
            {todos.map((todo) => (
                <li key={todo.id.toString()}>
                        <span
                            onClick={() => onToggle(todo)}
                            className={["todo", todo.checked ? 'checked' : ''].join(' ')}
                        >{todo.title}</span>
                    <button
                        onClick={() => onRemove(todo)}
                        className='remove'
                        type='button'>
                        <MdDelete size={28}/>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;