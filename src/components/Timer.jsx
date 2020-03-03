import React from 'react';
import { connect } from "react-redux";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { start, stop } from './../redux/actionCreators';

class TimerApp extends React.Component {
  constructor(props) {
    super(props);

    const { isStarted, startTime } = this.props;

    const counter = isStarted ? Math.floor((Date.now() - startTime) / 1000) : 0;

    this.state = { input: '', counter };

    this.interval = null;
  }

  handleInput = event => {
    this.setState({ input: event.target.value });
  }

  handleStart = () => {
    this.props.start();
    this.interval = setInterval(() => {
      this.setState(({ input, counter }) => ({ input, counter: counter + 1 }))
    }, 1000)
  };

  handleStop = () => {
    this.props.stop(this.state.input);
    this.setState({ input: '', counter: 0 });
    clearInterval(this.interval);
  }

  componentDidMount = () => {
    const { isStarted, startTime } = this.props;
    if (isStarted) {
      this.interval = setInterval(() => {
        const counter = Math.floor((Date.now() - startTime) / 1000);
        this.setState(({ input }) => ({ input, counter }))
      }, 1000)
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    const startButton = <Button variant="contained" onClick={this.handleStart}>START</Button>

    const stopButton = <Button variant="contained" onClick={this.handleStop}>STOP</Button>

    const { isStarted } = this.props;
    const { input, counter } = this.state;

    return (
        <div className="timer" >
            <TextField
              id="standard-basic"
              label="Your Task"
              onChange={this.handleInput}
              value={input}
            />
            <div className="clock" >{counter}</div>

            { isStarted ? stopButton : startButton}
        </div>
    );
  }
}

const mapStateToProps = ({ timer: { isStarted, startTime } }) => ({ isStarted, startTime });

export default connect(mapStateToProps, { start, stop })(TimerApp);
