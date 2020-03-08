import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Tabs, Tab } from '@material-ui/core';

const Panel = ({ currentTab, history }) => (
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

Panel.defaultProps = {
  currentTab: 'log',
  history: {},
};

Panel.propTypes = {
  currentTab: PropTypes.oneOf(['log', 'chart']),
  history: PropTypes.shape({ push: PropTypes.func }),
};

export default withRouter(Panel);
