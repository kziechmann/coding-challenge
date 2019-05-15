import React, { Component } from 'react';

export default class TaskGroup extends Component {
    render(){
        return(
        <div>
            <img src="http://localhost:3000/group.svg"/>
            <h2>{`Task Group: ${this.props.group}`}</h2>
            <p>{`${this.props.completed} OF ${this.props.inGroup} COMPLETE`}</p>
            <hr></hr>
        </div>)
    }
}