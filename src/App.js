import React, { Component } from 'react'
import AllTasks from './Components/all_tasks.js'
import GroupExpanded from './Components/group_expanded';

import './App.css'


export default class App extends Component {
  state = {
    tasks: [],
    current_group: null
  }

  expandGroup = (group) =>{
    this.setState({current_group: group})
  }

  allGroups = (e) =>{
    e.preventDefault()
    this.setState({current_group: null})
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
    let componentToRender
    if(!this.state.current_group){
      componentToRender = <AllTasks tasks={this.state.tasks} expandGroup={this.expandGroup}/>
    } else {
      componentToRender = <GroupExpanded tasks={this.state.tasks} group={this.state.current_group} allGroups={this.allGroups}/>
    }
    return <div className='grid'>{componentToRender}</div>
  }
}
