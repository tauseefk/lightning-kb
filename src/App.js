import React, { Component } from 'react';
import './App.css';
import Kanban from './components/kanbanBoard';

class App extends Component {

  render() {
    return (
      <div className="App container">
        {/* <header className="App-header">
          <h1 className="App-title"></h1>
        </header> */}
        <Kanban />
      </div>
    );
  }
}



export default App;
