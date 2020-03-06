import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';

import NotFound from './NotFound';

import { formatTime, msecs2time } from '../utils';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  title: {
    fontSize: 14,
  },
});

const Task = ({ match, tasks }) => {
  const task = tasks.find(({ id }) => id === match.params.id);

  const classes = useStyles();

  return task ? (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
          {task.title}
        </Typography>
        <TableContainer>
          <Table className="task-card" size="small" aria-label="a dense table">
            <TableBody>
              <TableRow key="start">
                <TableCell align="left">Start</TableCell>
                <TableCell align="left">{msecs2time(task.startTime)}</TableCell>
              </TableRow>
              <TableRow key="end">
                <TableCell align="left">End</TableCell>
                <TableCell align="left">{msecs2time(task.endTime)}</TableCell>
              </TableRow>
              <TableRow key="duration">
                <TableCell align="left">Duration</TableCell>
                <TableCell align="left">{formatTime(Math.floor((task.endTime - task.startTime) / 1000))}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to="/main/log">
            BACK
          </Link>
        </Button>
      </CardActions>
    </Card>
  ) : (<NotFound />);
};

Task.defaultProps = {
  match: {},
  tasks: [],
};

Task.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }),
  tasks: PropTypes.arrayOf((tasks, key, component, location, propName) => {
    const { id } = tasks[key];
    if (!id) return new Error(`${component} has received invalid prop: ${propName}`);
  }),
};

const mapStateToProps = ({ timer: { tasks } }) => ({ tasks });

export default connect(mapStateToProps)(Task);
