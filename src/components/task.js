import React from 'react';
import shouldUpdate from 'recompose/shouldUpdate';

const Task = ({ task, moveLeft, moveRight }) => {
  return (
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
}
const checkPropsChange = (props, nextProps) => nextProps.task !== props.task;

export default shouldUpdate(checkPropsChange)(Task);
