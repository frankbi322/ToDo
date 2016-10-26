import {REQUEST_TODOS, RECEIVE_TODOS, requestTodos, receiveTodos} from '../actions/todo_actions';
import {fetchTodos} from '../util/todo_api_util';

const TodoMiddleware = ({ getState, dispatch }) => next => action => {
  switch (action.type) {
    case REQUEST_TODOS:
      const success = data => dispatch(receiveTodos(data));

      const error = e => console.log(e);
      fetchTodos(success, error);
      return next(action);
    // case RECEIVE_TODOS:

    default:
      return next(action);
  }
};

export default TodoMiddleware;
