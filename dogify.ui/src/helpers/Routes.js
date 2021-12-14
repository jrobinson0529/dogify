import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import Login from '../views/Login';
import PersonalityTestPage from '../views/PersonalityTest';
import Users from '../views/Users';

function Routes({ user }) {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={() => <Login user={user}/>} />
        <PrivateRoute exact path="/" component={() => <PersonalityTestPage user={user} />} user={user}/>
        <PrivateRoute exact path="/users" component={() => <Users user={user} />} user={user}/>
      </Switch>
    </>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
  time: PropTypes.string,
};
export default Routes;
