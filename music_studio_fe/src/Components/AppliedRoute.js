import React from "react";
import { Route } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";


export default ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />;
