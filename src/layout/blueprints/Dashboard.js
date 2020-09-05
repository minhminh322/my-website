import React, { Component } from "react";
import { Route } from "react-router-dom";

const Dashboard = ({ children, ...rest }) => {
  return <div>{children}</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Dashboard>
          <Component {...matchProps} />
        </Dashboard>
      )}
    />
  );
};

export default DashboardRoute;
