import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';

import TaskTimer from './components/TaskTimer';
import Panel from './components/Panel';
import TaskLog from './components/TasksLog';
import TasksChart from './components/TasksChart';
import Task from './components/Task';
import NotFound from './components/NotFound';

const App = () => (
  <div className="App">
    <Route path="/main" component={TaskTimer} />
    <Paper square>
      <Switch>
        <Route path="/main/log">
          <Panel currentTab="log" />
          <TaskLog />
        </Route>
        <Route path="/main/chart">
          <Panel currentTab="chart" />
          <TasksChart />
        </Route>
        <Route path="/tasks/:id" component={Task} />
        <Route path="/default" component={NotFound} />
        <Redirect to="/main/log" />
      </Switch>
    </Paper>
  </div>
);

export default App;
