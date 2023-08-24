import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// import {
//   addTodoAction,
//   decrementAction,
//   incrementAction,
//   removeLastTodoAction,
// } from "./redux/mainReducer";
import {
  increment,
  decrement,
  addTodo,
  removeLastTodo,
} from "./reduxToolkit/toolkitSlice";

const addAsyncTodo = () => {
  return async function (dispatch) {
    setTimeout(() => dispatch(addTodo(prompt("ADD ASYNC TODO"))), 2000);
  };
};

function App() {
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.main.count);
  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addTodo(prompt("Enter a todo name")))}>
        Add todo
      </button>
      <button onClick={() => dispatch(addAsyncTodo())}>Add async todo</button>
      <button onClick={() => dispatch(removeLastTodo())}>
        Remove last todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li style={{ listStyleType: "none" }} key={todo}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
