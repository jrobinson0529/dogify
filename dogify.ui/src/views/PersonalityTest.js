import React from 'react';
import PropTypes from 'prop-types';
import PersonalityTest from '../components/PersonalityTest';

function PersonalityTestPage({ user, setUser }) {
  return (
    <>
      <h1 className='title my-5'>Dogify personality test</h1>
      <PersonalityTest user={user} setUser={setUser}/>
    </>
  );
}
PersonalityTestPage.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
};

export default PersonalityTestPage;
