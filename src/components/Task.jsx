import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

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

  return (
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
          <Link to="/timer">
            BACK
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = ({ timer: { tasks } }) => ({ tasks });

export default connect(mapStateToProps)(Task);
