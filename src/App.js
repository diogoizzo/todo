import './App.css';
import { useState, useEffect } from "react";
import Form from './components/Form';
import List from './components/Todolist';
function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodo] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFiltered(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFiltered(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  }
  useEffect(() =>{
    if (localStorage.getItem("todos") !== null){
      let local = JSON.parse(localStorage.getItem("todos"));
      setTodo(local);  
    }
  }, []);

  useEffect(() => {
    filterHandler();
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [status, todos]);
  
 
  
  return (
    <div className="App">
      <header>
        <h1>Diogo - Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodo={setTodo}
        setInputText={setInputText}
        setStatus={setStatus}
      >
      </Form>
      <List todos={todos} setTodo={setTodo} filtered={filtered}
        setFiltered={setFiltered} status={status} />
    </div>
  );
}

export default App;
