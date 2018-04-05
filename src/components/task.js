import React from 'react';

const Task = ({ task, moveLeft, moveRight }) => (
  <div className='task row'>
    <p
      className='col-sm-4 btn'
      onClick={moveLeft}>
      &lt;
      </p>
    <p className='col-sm-4'>{task.content}</p>
    <p
      className='col-sm-4 btn'
      onClick={moveRight}>
      &gt;
      </p>
  </div>
)

export default Task;
