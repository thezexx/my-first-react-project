import { useReducer, useState, useMemo, useCallback } from "react";
import todoReducer from "./reducers/todoReducer";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";



function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: "",
    search: ""
  });

  const submitHandle = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      value: state.todo,
    })
  }, [state.todo]);

  const change = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);

  const searchHandle = e => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value
    })
  }

  const filteredTodos = useMemo(() => {
    return state.todos.filter(todo => todo.toLocaleLowerCase("TR").includes(state.search.toLocaleLowerCase("TR")));
  }, [state.search, state.todos])
  
  return (
    <>
      <Header />
      <p>{count}</p>
      <button onClick={() => setCount(c => c +1 )}>Arttır</button>
      <hr/>
      <h1>Todo App</h1>
      <input type="text" placeholder="Search Todos..." onChange={searchHandle}/>
      <hr/>
      <AddTodo todo={state.todo} change={change} submitHandle={submitHandle}/>
      <Todos todos={filteredTodos}/>
    </>
  );
}

export default App;
