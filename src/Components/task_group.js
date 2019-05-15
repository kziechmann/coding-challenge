import React, { Component } from 'react';

export default class TaskGroup extends Component {
    render(){
        return(
        <div onClick={()=> this.props.expandGroup(this.props.group)} className='clickable'>
            <img src="http://localhost:3000/group.svg" className='icon' style={{marginBottom: '25px'}}/> 
            <div className='group'> 
                <h3 >{`Task Group: ${this.props.group}`}</h3>
                <p>{`${this.props.completed} OF ${this.props.inGroup} COMPLETE`}</p>
            </div> 
        </div>)
    }
}