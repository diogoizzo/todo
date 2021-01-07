import React, { useState } from 'react'
function Todo({ text, todos, setTodo, todo }) {
    const [divClass, setDivClass] = useState("todo");
    const deleteHandler = (e) => {
        const novoTodo = todos.filter(el => el.id !== todo.id);
        setDivClass("todo deleted");
        setTimeout(() => {
            setTodo(novoTodo)}
            , 800);
    };

    const completeHandler = () => {
        setTodo(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }));
    };

    return (
        <div>
            <div className={divClass}>
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
                <button className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
                <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
            </div>
        </div>
    )
}

export default Todo
