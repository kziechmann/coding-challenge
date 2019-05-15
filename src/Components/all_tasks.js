import React, { Component } from 'react'


export default class AllTasks extends Component {
  render() {
    return <div>
            <h1> ALL TASKS </h1>
            <ol>{this.props.tasks.map(
                item=><h2>{item.task}</h2>
                )}</ol>
            </div>
        
  }
}
