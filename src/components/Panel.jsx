import React from 'react';
import { withRouter } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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

export default withRouter(Panel);
