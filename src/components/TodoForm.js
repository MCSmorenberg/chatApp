import React from 'react';

class TodoForm extends React.Component {
  componentDidMount() {
    this.todos = this.props.model;

  }

  createTodo(event) {
    event.preventDefault();
    console.log("Create todo called");
    let newTitle = this.refs.newTitle.value;
    this.todos.addResource({
      title: newTitle,
      completed: false
    });
    this.refs.newTitle.value = ""
  }

  render() {
    return (
        <div>
          <form onSubmit={this.createTodo.bind(this)}>
            <div>
              <input type='text' className="form-control" ref="newTitle" />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      );
  }
}

export default TodoForm;
