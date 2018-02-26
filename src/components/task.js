import React from 'react';

const Task = ({task, moveLeft, moveRight}) => (
    <div className='task row'>
      <p
        className='col-sm-4 btn'
        onClick={moveLeft.bind(this, task.id)}>
        &lt;
      </p>
      <p className='col-sm-4'>{task.content}</p>
      <p
        className='col-sm-4 btn'
        onClick={moveRight.bind(this, task.id)}>
        &gt;
      </p>
    </div>
)

export default Task;
