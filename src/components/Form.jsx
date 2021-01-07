import React, { Component } from 'react'

export default class Form extends Component {  
    imputHandler = e => {
        console.log(e.target.value);
        this.props.setInputText(e.target.value);
    };

    submitHandler = e =>{
        e.preventDefault();
        this.props.setTodo([...this.props.todos,{
            text: this.props.inputText, 
            completed: false,
            id: Math.random() * 1000
        }]);
        this.props.setInputText('');
        
    };
    statusHandler = e => {
        this.props.setStatus(e.target.value);
    }
    render() {
        return (
            <div>
                <form>
                    <input value={this.props.inputText} onChange={this.imputHandler} type="text" className="todo-input" />
                    <button onClick={this.submitHandler} className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select name="todos" onChange={this.statusHandler} className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
