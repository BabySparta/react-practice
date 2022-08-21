import React from "react";
import { Tasks } from "./components/Overview";
import uniqid from "uniqid";

class App extends React.Component {
  constructor() {
      super()

      this.state = {
        task: {
          text: '',
          id: uniqid()
        },
        tasks: [],
      }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
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
      },
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
            <Tasks tasks={tasks}/>
          </div>
      )
  }
}

export default App;
