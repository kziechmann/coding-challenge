import React, { Component } from 'react'
import AllTasks from './Components/all_tasks.js'
import TaskGroup from './Components/task_group'

import './App.css'

export default class App extends Component {
  state = {
    tasks: [],
    current_group: 0
  }
  
  async componentDidMount(){
    const task_JSON = await fetch('http://localhost:3000/data.json')
    const task_data = await task_JSON.json()
    this.setState({tasks: task_data})
  }

  render() {
    return this.state.current_group === 0? <AllTasks tasks={this.state.tasks}></AllTasks> : <TaskGroup group_id={this.state.current_group}></TaskGroup>
  }
}
