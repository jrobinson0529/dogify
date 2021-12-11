import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import About from '../views/About';
import Users from '../views/Users';

function Routes({ user, time }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} time={time}/>} />
        <PrivateRoute exact path="/about" component={() => <About user={user} />} user={user}/>
        <PrivateRoute exact path="/users" component={() => <Users user={user} />} user={user}/>
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
  time: PropTypes.string,
};
export default Routes;
