import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RootLocation } from "./Locations";
import ScrollToTop from "./utils/ScrollToTop";
import HomeView from "./views/Home";

const CustomRoute = (props) => {
  const { path, redirect, withAuth, component, ...leftProps } = props;

  if (redirect) {
    return <Redirect from={path} to={redirect} {...leftProps} />;
  }

  //return <Route path={path} component={error.error ? ErrorView : component} />;
  return <Route path={path} component={component} />;
};

const routes = [
  {
    path: RootLocation,
    exact: true,
    withAuth: true,
    component: HomeView,
  },
];

export default function Routes() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {routes.map((props) => (
          <CustomRoute key={props.path || "default"} {...props} />
        ))}
      </Switch>
    </>
  );
}
