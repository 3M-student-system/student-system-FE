import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HeaderBase, Loading } from "./components";

const Homelazy = lazy(() => import("./pages/Home/Home"));
const Viewlazy = lazy(() => import("./pages/View/View"));
function Routes() {
  return (
    <Router>
      <HeaderBase />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Homelazy} />
          <Route exact path="/view" component={Viewlazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
