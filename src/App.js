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
    const tasks_grouped = task_data.reduce((groups,task)=>{
      if(groups[task.group]) groups[task.group].push(task)
      else groups[task.group] = [task]
      return groups
    },{})
    this.setState({tasks: tasks_grouped})
  }

  render() {
    return this.state.current_group === 0? <AllTasks tasks={this.state.tasks}></AllTasks> : <TaskGroup group_id={this.state.current_group}></TaskGroup>
  }
}
