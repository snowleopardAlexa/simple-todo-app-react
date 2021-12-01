import React from 'react';
import Todo from "./components/Todo";

function TodoList() {
    return (
         <div className="todo-container">
            <ul className="todo-list">
                <Todo />
            </ul>
        </div>
    );
}

export default TodoList;


