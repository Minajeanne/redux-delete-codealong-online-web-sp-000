import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todo})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
