import React, { Component } from 'react'
import TaskGroup from './task_group';

export default class AllTasks extends Component {
  

  render() {
    return <div className='container'>
                <h1> Things To Do </h1>
                <hr></hr>
                {Object.keys(this.props.tasks).map(group=>{

                    const tasksInGroup = this.props.tasks[group].length
                    const tasksCompleted = this.props.tasks[group].reduce(
                        (completed,task)=>task.completedAt? completed+1: completed,0)
                        
                    return (<span>
                                <TaskGroup 
                                    group={group} 
                                    completed={tasksCompleted} 
                                    inGroup={tasksInGroup} 
                                    expandGroup={this.props.expandGroup}
                                />        
                                <hr></hr> 
                            </span>)
                    }
                    )} 
            </div>
        
  }
}
