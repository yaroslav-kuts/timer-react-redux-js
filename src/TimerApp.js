import React from 'react';

import TaskTimer from './components/TaskTimer';
import TaskLog from './components/TasksLog';

const App = () => (
  <div className="App">
    <TaskTimer />
    <TaskLog />
  </div>
);

export default App;
