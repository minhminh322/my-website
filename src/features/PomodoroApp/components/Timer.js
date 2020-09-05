import React, { Component, Fragment } from "react";

import { Row, Col, Container } from "reactstrap";
import CountdownTimer from "./CountdownTimer";
import Sessions from "./Sessions";
import ProgressBar from "./ProgressBar";
import ControlButtons from "./ControlButtons";
import Notifications from "./Notifications";
// import "../../../assets/features/TimerApp/_base.scss";
import ClickEffect from "../../../assets/components/Pomodoro/Clicking-sound-effect.mp3";
import finishEffect from "../../../assets/components/Pomodoro/Church.mp3";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStart: false,
      progression: {
        completed: 0,
        totalProgress: 10,
      },

      session: {
        title: "Pomodoro",
        cycle: 4,
      },

      timer: {
        minutes: 25,
        seconds: 0,
      },

      effect: {
        click: new Audio(ClickEffect),
        finish: new Audio(finishEffect),
      },
    };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handlePomodoro = this.handlePomodoro.bind(this);
    this.handleShortBreak = this.handleShortBreak.bind(this);
    this.handleLongBreak = this.handleLongBreak.bind(this);
    this.progression = this.progression.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    this.countDown = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countDown);
  }

  tick = () => {
    const { minutes, seconds } = this.state.timer;
    const { title, cycle } = this.state.session;

    if (this.state.isStart) {
      if (seconds > 0) {
        this.setState({
          timer: {
            minutes: minutes,
            seconds: seconds - 1,
          },
        });
      }

      if (seconds === 0) {
        if (minutes === 0) {
          if (title === "Pomodoro") {
            this.playSound();
            this.progression();
            if (cycle > 1) this.handleShortBreak();
            if (cycle <= 1) this.handleLongBreak();
          } else if (title === "Short Break") {
            this.handlePomodoro();
          } else if (title === "Long Break") {
            this.handlePomodoro();
          } else {
            this.handleLongBreak();
          }
        } else {
          this.setState({
            timer: {
              minutes: minutes - 1,
              seconds: 59,
            },
          });
        }
      }
    }
  };

  handleStartClick() {
    this.state.effect.click.play();
    this.setState((state) => ({
      isStart: !state.isStart,
    }));
  }

  playSound() {
    const { finish } = this.state.effect;
    finish.play();
  }

  progression() {
    this.setState({
      progression: {
        completed: this.state.progression.completed + 1,
        totalProgress: this.state.progression.totalProgress,
      },
    });
  }
  handlePomodoro() {
    this.setState({
      isStart: false,
      session: {
        title: "Pomodoro",
        cycle: this.state.session.cycle,
      },
      timer: {
        minutes: 25,
        seconds: 0,
      },
    });
  }
  handleShortBreak() {
    this.setState({
      isStart: false,
      session: {
        title: "Short Break",
        cycle: this.state.session.cycle - 1,
      },
      timer: {
        minutes: 5,
        seconds: 0,
      },
    });
  }
  handleLongBreak() {
    this.setState({
      isStart: false,
      session: {
        title: "Long Break",
        cycle: 4,
      },
      timer: {
        minutes: 30,
        seconds: 0,
      },
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Sessions
              handlePomodoro={this.handlePomodoro}
              handleShort={this.handleShortBreak}
              handleLong={this.handleLongBreak}
            />
          </Col>
        </Row>
        <div className="divider mb-4" />
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <CountdownTimer currentSession={this.state.session.title} currentTime={this.state.timer} />
          </Col>
        </Row>
        <div className="divider mb-4" />
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <ProgressBar currentProgress={this.state.progression}></ProgressBar>
          </Col>
        </Row>

        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <ControlButtons isStart={this.state.isStart} handleStartClick={this.handleStartClick}></ControlButtons>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Timer;
