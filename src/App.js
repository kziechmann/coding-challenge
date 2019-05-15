import React, { Component } from 'react'
import AllTasks from './Components/all_tasks.js'
import TaskGroup from './Components/task_group'

import './App.css'

export default class App extends Component {
  state = {
    tasks: [],
    current_group: 0
  }

  render() {
    return this.state.current_group !== 0? <AllTasks></AllTasks> : <TaskGroup group_id={this.state.current_group}></TaskGroup>
  }
}
