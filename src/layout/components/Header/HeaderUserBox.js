import React, { Fragment, Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import avatar from "../../../assets/data/avatar.png";
export default class HeaderUserbox extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ maxWidth: "400px", overflow: "hidden" }}>
          <img src={avatar} style={{ width: "100%", objectFit: "contain" }} alt="..." />
        </div>
      </Fragment>
    );
  }
}
