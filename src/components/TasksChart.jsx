import React from 'react';
import { connect } from 'react-redux';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { aggregateIntervals } from '../utils';

const Chart = ({ tasks }) => (
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
);

const mapStateToProps = ({ timer: { tasks } }) => ({ tasks });

export default connect(mapStateToProps)(Chart);
