import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg } from 'reactstrap';

function DogCard({ user }) {
  return (
    <Card>
      <CardImg
        className='dog-card'
        src={user?.imageUrl}
        alt={user?.username}/>
    </Card>
  );
}

DogCard.propTypes = {
  user: PropTypes.any,
};

export default DogCard;
