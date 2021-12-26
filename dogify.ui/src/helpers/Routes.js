import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import Login from '../views/Login';
import PersonalityTestPage from '../views/PersonalityTest';
import Profile from '../views/Profile';
import Park from '../views/Park';

function Routes({ user, setUser }) {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={() => <Login user={user}/>} />
        <PrivateRoute exact path="/" component={() => <PersonalityTestPage user={user} setUser={setUser}/>} user={user}/>
        <PrivateRoute exact path="/user/:id" component={() => <Profile user={user} setUser={setUser}/>} user={user}/>
        <PrivateRoute exact path="/dogpark" component={() => <Park user={user} setUser={setUser}/>} user={user}/>
      </Switch>
    </>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
  time: PropTypes.string,
  setUser: PropTypes.func,
};
export default Routes;
