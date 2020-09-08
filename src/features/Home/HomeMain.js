import React, { useContext, Fragment } from "react";
import ReactTypingEffect from "react-typing-effect";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Switch from "react-switch";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { v1 as uuidv1 } from "uuid";
import { MasterContext } from "../../contexts/MasterContext";
import { Button } from "reactstrap";
import husky from "../../assets/components/Home/husky.jpg";

const MyHomePage = () => {
  const { master, toggleTheme, toggleSidebar } = useContext(MasterContext);
  return (
    <Fragment>
      <div className="home-main">
        <img src={husky} alt="Avatar" className="profilepic"></img>
      </div>
    </Fragment>
  );
};
export default MyHomePage;
