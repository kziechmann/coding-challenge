import React, { Component } from 'react'


export default class AllTasks extends Component {
  render() {
    return <div>
                <h1> Things To Do </h1>
                <hr></hr>
                <ol>{Object.keys(this.props.tasks).map(item=>{
                    const tasksInGroup = this.props.tasks[item].length
                    const tasksCompleted = this.props.tasks[item].reduce(
                        (completed,task)=>task.completedAt? completed+1: completed,0)
                    return(<div>
                        <h2>{`Task Group: ${item}`}</h2>
                        <p>{`${tasksCompleted} OF ${tasksInGroup} COMPLETE`}</p>
                        <hr></hr>
                    </div>
                    )}
                )}</ol>
            </div>
        
  }
}
