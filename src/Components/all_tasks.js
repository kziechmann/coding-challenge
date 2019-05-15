import React, { Component } from 'react'
import TaskGroup from './task_group';

export default class AllTasks extends Component {
  

  render() {
    return <div>
                <h1> Things To Do </h1>
                <hr></hr>
                <ul>{Object.keys(this.props.tasks).map(group=>{

                    const tasksInGroup = this.props.tasks[group].length
                    const tasksCompleted = this.props.tasks[group].reduce(
                        (completed,task)=>task.completedAt? completed+1: completed,0)
                        
                    return <li>
                                <TaskGroup 
                                    group={group} 
                                    completed={tasksCompleted} 
                                    inGroup={tasksInGroup} 
                                    expandGroup={this.props.expandGroup}
                                />
                            </li>
                    }
                    
                )}</ul>
            </div>
        
  }
}
