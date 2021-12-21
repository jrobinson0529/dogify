import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import getSingleBreed from '../helpers/data/breedData';

function Congratulations({ user }) {
  const history = useHistory();
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    if (user.breedId) getSingleBreed(user.breedId).then(setBreed);
  }, [user]);

  const handleProfileClick = () => {
    history.push(`/user/${user.id}`);
  };
  const handleDogParkClick = () => {
    history.push('/dogpark');
  };

  return (
    <div>
      {
      breed !== null
      && <>
        <img src={breed?.imageUrl} alt={breed?.breedTitle} />
        <h1>{user?.username} you are a {breed?.breedTitle}</h1>
        </>
      }
      <ButtonGroup>
        <Button color='primary' onClick={handleProfileClick}>Profile</Button>
        <Button color='primary' onClick={handleDogParkClick}>Dog Park</Button>
      </ButtonGroup>
    </div>
  );
}
Congratulations.propTypes = {
  user: PropTypes.any,
};

export default Congratulations;
