import React from 'react';
import Task from './task';
import shouldUpdate from 'recompose/shouldUpdate';

const Stage = ({ style, name, taskList, moveLeft, moveRight, addTask }) => {
  return (
    <div className='col-sm-3'>
      <p style={style} className='stage'>{name}</p>
      <Tasks
        taskList={taskList}
        moveLeft={moveLeft}
        moveRight={moveRight}
      />
      <p className='btn' onClick={addTask}>+ Add a card</p>
    </div>
  )
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
// XXX:TODO task moving and adding doesn't work
const checkPropsChange = (props, nextProps) => {
  return nextProps.taskList.length !== props.taskList.length
};

export default Stage;