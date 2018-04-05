import React, { Component } from 'react';
import Task from './task';

export default class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    }
    this.handleClick = this.props.addTask;
  }

  render() {
    return (
      <div className='col-sm-3'>
        <p style={this.props.style} className='stage'>{this.props.name}</p>
        <Tasks
          taskList={this.props.taskList}
          moveLeft={this.props.moveLeft}
          moveRight={this.props.moveRight}
        />
        <p className='btn' onClick={this.handleClick}>+ Add a card</p>
      </div>
    )
  }
}

const Tasks = ({ taskList, moveLeft, moveRight }) => {
  return taskList.map((task) => (
    <Task
      key={task.id}
      task={task}
      moveLeft={() => moveLeft(task.id)}
      moveRight={() => moveRight(task.id)} />
  ))
}
