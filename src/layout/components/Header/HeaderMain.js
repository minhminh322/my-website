import React, { useContext, Fragment } from "react";
import { Container, Button, Badge, Row, Col } from "react-bootstrap";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MasterContext } from "../../../contexts/MasterContext";
import HeaderUserbox from "./HeaderUserBox";
import avatar from "../../../assets/data/avatar.png";

const HeaderMain = () => {
  const { master, toggleTheme } = useContext(MasterContext);
  return (
    <Fragment>
      <div className="app-header-left-side">
        <h1>{master.header.title}</h1>
        <Badge pill variant="info">
          In Progress
        </Badge>
      </div>
      <div className="app-header-right-side">
        <div className="app-header-theme">
          <Switch
            height={22}
            width={40}
            checkedIcon={false}
            uncheckedIcon={false}
            onChange={toggleTheme}
            checked={!master.theme.isLightTheme}
            onColor="#219de9"
            offColor="#bbbbbb"
          />
          {master.theme.isLightTheme ? (
            <FontAwesomeIcon icon={["far", "lightbulb"]} className="font-size-md text-dark" />
          ) : (
            <FontAwesomeIcon icon={["far", "lightbulb"]} className="font-size-md text-light" />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderMain;

{
  /* <Button
tag="a"
href="https://www.facebook.com/minh.pan/"
target="_blank"
size="sm"
color="neutral-success"
className="ml-3 mr-3 btn-transition-none"
>
My Facebook
</Button> */
}

// {/* <div className="app-header-userBox">
// {/* <HeaderUserbox /> */}
// <img src={avatar} style={{ maxWidth: "100%", maxHeight: "100%" }} alt="..." />
// </div> */}
