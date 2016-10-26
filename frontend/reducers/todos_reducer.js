import {REQUEST_TODOS, RECEIVE_TODOS} from '../actions/todo_actions';


const TodosReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach((todo) => newState[todo.id] = todo);
      return newState;
    default:
      return state;
  }
};

export default TodosReducer;
