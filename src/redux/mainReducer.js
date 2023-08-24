const defaultState = {
  count: 0,
  todos: [],
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_TODO = "ADD_TODO";
const REMOVE_LAST_TODO = "REMOVE_LAST_TODO";

export const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_LAST_TODO:
      return {
        ...state,
        todos: [...state.todos.slice(0, state.todos.length - 1)],
      };
    default:
      return state;
  }
};

export const incrementAction = () => ({ type: INCREMENT });
export const decrementAction = () => ({ type: DECREMENT });
export const addTodoAction = (payload) => ({
  type: ADD_TODO,
  payload: payload,
});
export const removeLastTodoAction = () => ({ type: REMOVE_LAST_TODO });
