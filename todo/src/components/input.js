import React, { Component } from 'react'

export default class Input extends Component {
  state = {
    action: ""
  }

  addTodo = async () => {
    let task = { action: this.state.action }
    console.log(task)
    if (task.action && task.action.length > 0) {
      await fetch('/api/todos', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(task)
      }).then(res => {
        if (res.data) {
          this.props.getTodos();
          this.setState({ action: "" })
        }
      })
        .catch(err => console.log(err))
    } else {
      console.log('input field required')
    }
  }
  handleChange = (e) => {
    this.setState({
      action: e.target.value
    })
  }
  render() {
    let { action } = this.state
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={action} />
        <button onClick={this.addTodo}>add todo</button>
      </div>
    )
  }
}
