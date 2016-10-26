import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {


  componentDidMount() {
    this.props.requestTodos();
  }

  render(){
    const {todos} = this.props;
    console.log(todos);
    return (
      <div >
      <ul>
        {todos.map((el,idx) => {
          return <TodoListItem todo={el} key={idx} />;
        })}
      </ul>
      </div>
    );
  }

}

export default TodoList;
