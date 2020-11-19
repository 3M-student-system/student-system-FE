import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HeaderBase, Loading } from './components';

const Homelazy = lazy(() => import('./pages/Home/Home'));
const Viewlazy = lazy(() => import('./pages/View/View'));
const AddStudentlazy = lazy(() => import('./pages/AddStudent/AddStudent'));
function Routes() {
  return (
    <Router>
      <HeaderBase />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Homelazy} />
          <Route exact path="/view" component={Viewlazy} />
          <Route exact path="/add-student" component={AddStudentlazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
