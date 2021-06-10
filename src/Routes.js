import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BlogLocation, RootLocation } from "./Locations";
import ScrollToTop from "./utils/ScrollToTop";
import BlogView from "./views/Blog";
import HomeView from "./views/Home";

const CustomRoute = (props) => {
  const { path, redirect, component, ...leftProps } = props;

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
    component: HomeView,
  },
  {
    path: BlogLocation,
    exact: true,
    component: BlogView,
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
