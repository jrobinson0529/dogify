import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import PersonalityTest from '../components/PersonalityTest';
import { getSingleUserByGoogleId } from '../helpers/data/userData';

import 'firebase/auth';
import Congratulations from '../components/Congratulations';

function PersonalityTestPage() {
  const [user, setUser] = useState({});
  const { currentUser } = firebase.auth();
  useEffect(() => {
    if (currentUser) {
      getSingleUserByGoogleId(currentUser.uid).then((response) => {
        setUser(response);
      });
    }
  }, []);
  return (
    <>
      <h1 className='title my-5'>{ user.breedId !== '00000000-0000-0000-0000-000000000000' ? 'Congratulations!' : 'Dogify Personality Test'}</h1>
      {
        user !== null
        && user.breedId !== '00000000-0000-0000-0000-000000000000' ? <Congratulations user={user} /> : <PersonalityTest user={user} setUser={setUser}/>
      }
    </>
  );
}
PersonalityTestPage.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
};

export default PersonalityTestPage;
