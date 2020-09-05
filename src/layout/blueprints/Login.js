import React, { Component } from "react";
import { Route } from "react-router-dom";

const Login = ({ children }) => <div>{children}</div>;

const LoginRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Login>
          <Component {...matchProps} />
        </Login>
      )}
    />
  );
};

export default LoginRoute;
