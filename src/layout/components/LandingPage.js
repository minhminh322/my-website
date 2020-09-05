import React, { Fragment } from "react";

import { Row, Col } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import husky from "../../assets/components/Home/husky.jpg";
// import hero9 from '../../assets/images/hero-bg/hero-9.jpg';
import { Button, UncontrolledTooltip, Badge } from "reactstrap";

const LandingPage = () => {
  return (
    <Fragment>
      <div className="landing-wrapper">
        <div className="landing-body">
          {/* <img src={husky} alt="Avatar" className="profilepic"></img> */}
          <h1>
            Welcome! <span className="wave">👋</span>
          </h1>

          <p>I'm Minh Phan, a software engineer based in Seattle, WA. I love building things for the web.</p>
          {/* <ReactTypingEffect
            className="typingeffect"
            text={[
              "Hi, my name is Minh Phan.",
              // "I'm a software engineer based in Seattle, WA." +
              // "I love building things for the web",
            ]}
            speed={100}
            eraseDelay={700}
          /> */}
          {/* <div className="landing-button"> */}
          <Row>
            <Col md={4}>
              <Button
                href="https://www.docdroid.net/rgPHcta/resume-minh-updated-pdf"
                target="_blank"
                color="info"
                size="lg"
              >
                My Resume
              </Button>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Button tag={Link} to="/MyDashboard" size="lg" color="success">
                <span>My Dashboard</span>
                <span className="btn-icon">
                  <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                </span>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
