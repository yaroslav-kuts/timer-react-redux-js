import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Panel = ({ currentTab, history }) => {
  return (
    <Tabs
      value={currentTab}
      indicatorColor="primary"
      textColor="primary"
      onChange={() => {}}
      aria-label="disabled tabs example"
    >
      <Tab label="TASKS LOG" value="log" onClick={() => history.push('/main/log')} />
      <Tab label="TASKS CHART" value="chart" onClick={() => history.push('/main/chart')} />
    </Tabs>
  );
};

export default compose(
  withRouter,
  connect(null, null),
)(Panel);
