import React, { Component } from 'react'
import Task from './task';

export default class GroupExpanded extends Component {
  render() {
    return <div className='container'>
      <span>
        <h1> Task Group: {this.props.group} </h1>
        <a className='home clickable' onClick={this.props.allGroups}> ALL GROUPS </a>
      </span>
      <hr></hr>
      {this.props.tasks[this.props.group].map(item=>
            <Task 
              locked={item.dependencyIds.length? true: false}
              group={this.props.group}
              task={item} 
              completeTask={this.props.completeTask}>
            </Task>)}
    </div>
    
    
  }
}
