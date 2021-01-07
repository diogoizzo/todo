import React, { Component } from 'react'
import Todo from './Todo'
export default class TodoList extends Component {
    render() {
        return (
            <div className="todo-container">
                <ul className="todo-list">
                    {this.props.filtered.map(todo => (
                        <Todo key={todo.id} text={todo.text} todos={this.props.todos} setTodo={this.props.setTodo} todo={todo}/>
                    ))}
                </ul>
            </div>
        )
    }
}
