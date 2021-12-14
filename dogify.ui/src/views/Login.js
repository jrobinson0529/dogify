import React from 'react';
import PropTypes from 'prop-types';
import LoginHero from '../components/LoginHero';

function Login() {
  return (
    <div className='login-page'>
      <LoginHero />
    </div>
  );
}
Login.propTypes = {
  time: PropTypes.string
};

export default Login;
