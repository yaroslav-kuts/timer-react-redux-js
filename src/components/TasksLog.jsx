/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class TasksLog extends Component {
  constructor() {
    super();
  }

  render() {
    const { tasks } = this.props;

    return (
      <Paper square>
        <Tabs
          value="blabla"
          indicatorColor="primary"
          textColor="primary"
          onChange={() => {}}
          aria-label="disabled tabs example"
        >
          <Tab label="TASKS LOG" />
          <Tab label="TASKS CHART" disabled />
        </Tabs>
        <TableContainer component={Paper}>
          <Table className="taskslog" size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Task</TableCell>
                <TableCell align="right">Time Start</TableCell>
                <TableCell align="right">Time End</TableCell>
                <TableCell align="right">Time Spend</TableCell>
                <TableCell align="right">Info</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, index) => (
                <TableRow key={task.id}>
                  <TableCell align="right">{index}</TableCell>
                  <TableCell align="right">{task.title}</TableCell>
                  <TableCell align="right">{task.startTime}</TableCell>
                  <TableCell align="right">{task.endTime}</TableCell>
                  <TableCell align="right">{task.endTime - task.startTime}</TableCell>
                  <TableCell align="right">info</TableCell>
                  <TableCell align="right">delete</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}

const mapStateToProps = ({ timer: { tasks } }) => ({ tasks });

export default connect(mapStateToProps)(TasksLog);
