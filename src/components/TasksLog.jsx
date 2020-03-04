/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import { deleteTask } from './../redux/actionCreators';

import { formatTime, msecs2time } from '../utils';

class TasksLog extends Component {
  constructor() {
    super();
  }

  handleDeletion = (event) => {
    const id = event.target.closest('tr').getAttribute('taskid');
    this.props.deleteTask(id);
  };

  render() {
    const { tasks } = this.props;

    return (
        <TableContainer>
          <Table className="taskslog" size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">Task</TableCell>
                <TableCell align="center">Time Start</TableCell>
                <TableCell align="center">Time End</TableCell>
                <TableCell align="center">Time Spend</TableCell>
                <TableCell align="center">Info</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, index) => (
                <TableRow key={task.id} taskid={task.id}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{task.title}</TableCell>
                  <TableCell align="center">{msecs2time(task.startTime)}</TableCell>
                  <TableCell align="center">{msecs2time(task.endTime)}</TableCell>
                  <TableCell align="center">{formatTime(Math.floor((task.endTime - task.startTime) / 1000))}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained">
                        <Link to={`/tasks/${task.id}`}>
                            INFO
                        </Link>
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" onClick={this.handleDeletion}>DELETE</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
  }
}

const mapStateToProps = ({ timer: { tasks } }) => ({ tasks });

export default connect(mapStateToProps, { deleteTask })(TasksLog);
