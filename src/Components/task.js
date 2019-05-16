import React, { Component } from 'react';

export default class Task extends Component {
    state={
        icon: null
    }

    componentDidMount(){
        this.updateIcon()
    }

    componentDidUpdate(){
        if(this.props.locked == false && this.state.icon == "http://localhost:3000/locked.svg")
            { this.updateIcon() }
    }

    updateIcon = ()=>{
        let icon
        if(this.props.locked) {
            icon = "http://localhost:3000/locked.svg"
        }
        else if (this.props.task.completedAt){
            icon = "http://localhost:3000/completed.svg"
        } else {
            icon = "http://localhost:3000/incomplete.svg"
        }
        this.setState({icon:icon})
    }


    completeTask = () => {
        this.props.completeTask(this.props.group,this.props.task.task)
        this.updateIcon()
    }

    render(){
        return(
        <div>
            {this.props.locked? 
                <img src={this.state.icon} className='icon'/>:
                <img src={this.state.icon} className='icon clickable' onClick={this.completeTask}/>
            }
            <h3 className={this.props.task.completedAt? 'task completed': 'task'}>
                {this.props.task.task}
            </h3>
            <hr></hr>
        </div>)
    }
}