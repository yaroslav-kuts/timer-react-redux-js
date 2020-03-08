import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { generateTasks } from '../redux/actionCreators';

import { aggregateIntervals } from '../utils';

const Chart = ({ tasks, generateTasks: generate }) => (
  <div>
    <BarChart
      width={850}
      height={300}
      data={aggregateIntervals(tasks)}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[0, 60]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="Minutes" fill="#8884d8" />
    </BarChart>
    <div className="generate">
      <Button variant="contained" onClick={() => generate()}>GENERATE</Button>
    </div>
  </div>
);

Chart.defaultProps = {
  tasks: [],
  generateTasks: () => {},
};

Chart.propTypes = {
  tasks: PropTypes.arrayOf((tasks, key, component, location, propName) => {
    if (!tasks[key]) {
      return new Error(`${component} has received invalid prop: ${propName}`);
    }
  }),
  generateTasks: PropTypes.func,
};

const mapStateToProps = ({ timer: { tasks } }) => ({ tasks });

export default connect(mapStateToProps, { generateTasks })(Chart);
