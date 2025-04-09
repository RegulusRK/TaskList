import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search.jsx';
import Filter from './components/Filter.jsx';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema.",
      category: "Trabalho",
      isComplete: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isComplete: false,
    },
    {
      id: 3,
      text: "Estudar React.",
      category: "Estudos",
      isComplete: true,
    }
  ]);

  const [theme, setTheme] = useState('dark');
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isComplete: false,
    }];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isComplete = !todo.isComplete : todo);
    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "🌞 Claro" : "🌙 Escuro"}
      </button>

      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isComplete : !todo.isComplete)
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>

      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
