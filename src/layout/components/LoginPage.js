import React, { Component } from "react";
import { Button, UncontrolledTooltip, Badge } from "reactstrap";
import { Link } from "react-router-dom";
const LoginPage = ({ classes }) => {
  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Login</h2>
      <form name="form">
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <Button
          tag={Link}
          to="/MyDashboard"
          size="lg"
          color="Primary"
          className="d-block d-sm-inline-block"
          title="View Bamburgh React Admin Dashboard with Reactstrap Free Live Preview"
        >
          <span className="btn-wrapper--label">Login</span>
        </Button>
        {/* <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default LoginPage;
