import React, { Component } from 'react';
import Stage from './stage';
import uuid from 'uuid/v4';

export default class Kanban extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stagesList: [
        {
          id: 1,
          name: "to-do",
          style: {
            'backgroundColor': "#13977F",
          },
          left: null,
          right: 2,
          tasks: [
            {
              id: uuid(),
              content: "buy eggs"
            },
            {
              id: uuid(),
              content: "buy milk"
            }
          ]
        },
        {
          id: 2,
          name: "in dev",
          style: {
            'backgroundColor': "#A65526",
          },
          left: 1,
          right: 3,
          tasks: [
            {
              id: uuid(),
              content: "do laundry"
            },
            {
              id: uuid(),
              content: "make spaceship"
            }
          ]
        },
        {
          id: 3,
          name: "in testing",
          style: {
            'backgroundColor': "#60DFFF",
          },
          left: 2,
          right: 4,
          tasks: [
            {
              id: uuid(),
              content: "pet puppies"
            },
            {
              id: uuid(),
              content: "shower"
            }
          ]
        },
        {
          id: 4,
          name: "done",
          style: {
            'backgroundColor': "#F46F00",
          },
          left: 3,
          right: null,
          tasks: [
            {
              id: uuid(),
              content: "eat"
            },
            {
              id: 54,
              content: "sleep"
            }
          ]
        }
      ]
    }
  }

  handleAddTask = (stageId) => {
    var taskContent = window.prompt('enter your task..');
    if (!taskContent || taskContent.trim() === '') {
      return;
    }
    let task = {
      id: uuid(),
      content: taskContent
    }
    this.setState(prevState => ({ stagesList: this.addTask(prevState, stageId, task) }));
  }

  addTask = ({ stagesList }, stageId, task) => {
    return stagesList.map((stage) => {
      var tasks = [...stage.tasks];
      if (stage.id === stageId) {
        tasks.push({
          id: task.id || uuid(),
          content: task.content
        });
      }
      return {
        id: stage.id,
        name: stage.name,
        tasks: tasks,
        style: stage.style,
        left: stage.left,
        right: stage.right
      };
    });
  }

  moveTask = (currStageId, destStageId, taskId) => {
    if (destStageId === null) {
      return;
    }
    var task = this.state.stagesList
      .filter((stage) => stage.id === currStageId)
      .map((stage) => stage.tasks)
      .concatAll()
      .filter((task) => task.id === taskId)
      .head();

    this.setState(prevState => ({ stagesList: this.addTask(prevState, destStageId, task) }));
    this.setState(prevState => ({ stagesList: this.removeTask(prevState, currStageId, taskId) }));
  }

  removeTask = ({ stagesList }, stageId, taskId) => {
    return stagesList.map((stage) => {
      var tasks = stage.tasks;
      if (stage.id === stageId) {
        tasks = stage.tasks.filter((task) => task.id !== taskId);
      }
      return {
        id: stage.id,
        name: stage.name,
        tasks: tasks,
        style: stage.style,
        left: stage.left,
        right: stage.right
      }
    });
  }

  render() {
    return (
      <div className='row'>
        <Stages
          stagesList={this.state.stagesList}
          addTask={this.handleAddTask}
          moveTask={this.moveTask}
        />
      </div>
    );
  }
}

const Stages = ({ stagesList, addTask, moveTask }) => {
  return stagesList.map(({ id, style, name, tasks, left, right }) => (
    <Stage
      key={id}
      style={style}
      name={name}
      taskList={tasks}
      addTask={() => addTask(id)}
      moveLeft={(taskId) => moveTask(id, left, taskId)}
      moveRight={(taskId) => moveTask(id, right, taskId)}
    />
  ))
}
