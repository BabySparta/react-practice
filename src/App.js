import React from "react";
import { Tasks } from "./components/Overview";
import uniqid from "uniqid";

class App extends React.Component {
  constructor() {
      super()

      this.state = {
        task: {
          text: '',
          id: uniqid(),
          number: 1,
        },
        tasks: [],
      }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        number: this.state.tasks.length + 1,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
        number: this.state.tasks.length + 2, 
      },
    })
  }

  handleDelete = (deleted) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task !== deleted),
      task: this.state.task,
      number: this.state.number,
    })

    this.state.tasks.forEach(task => {
      task.number = this.state.tasks.indexOf(task) + 1;
    })
  }


  render() {
    const { task, tasks } = this.state;
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="taskInput">Enter task</label>
              <input
                onChange={this.handleChange}
                value={task.text}
                type="text"
                id="taskInput"
              />  
              <button type="submit">Add Task</button>
            </form>
            <Tasks tasks={tasks} deleteBtn={this.handleDelete}/>
          </div>
      )
  }
}

export default App;
