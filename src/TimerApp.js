import React from 'react';
import { Route } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import TaskTimer from './components/TaskTimer';
import Panel from './components/Panel';
import TaskLog from './components/TasksLog';
import TasksChart from './components/TasksChart';
import Task from './components/Task';

const App = () => (
  <div className="App">
    <Route path="/main" component={TaskTimer} />
    <Paper square>
      <Route path="/main/log">
        <Panel currentTab="log" />
        <TaskLog />
      </Route>
      <Route path="/main/chart">
        <Panel currentTab="chart" />
        <TasksChart />
      </Route>
    </Paper>
    <Route path="/tasks/:id" component={Task} />
  </div>
);

export default App;
