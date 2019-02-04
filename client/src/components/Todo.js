import React, { Component } from 'react'
import Input from './input';
import ListTodo from './ListTodo'

export default class Todo extends Component {
  state = {
    todos:[]
  }
  componentDidMount() {
    this.getTodos();
  }
  getTodos = () => {
    fetch('/api/todos')
    .then(res => {
      if(res.data){
        this.setState({todos:res.data})
      }
    })
  }
  deleteTodo = id => {
    fetch(`api/todos/${id}`, {
      method:'DELETE'
    })
    .then(res => {
      if(res.data){
        this.getTodos()
      }
    }).catch(err => console.log(err))
  }
  render() {
    let {todos} = this.state
    return (
      <div>
        <h1>My Todos</h1>
        <Input getTodos={this.getTodos} />
        <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}
