import React, { useState } from 'react';
import {
  Button, Col, Container, Row
} from 'reactstrap';
// import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileForm from '../components/ProfileForm';

// eslint-disable-next-line no-unused-vars
function Profile({ user, setUser }) {
  const [editing, setEditing] = useState(false);
  const handleClick = () => setEditing((prev) => !prev);
  // const { id } = useParams();
  return (
    <div className="single-user-cont">
    <Container>
      <Row>
        <Col>
          <img className="profile-image" src={user?.imageUrl}/>
          <h2>Username: {user?.username}</h2>
          <Button onClick={() => handleClick()}>Update Your Information</Button>
          { editing ? <ProfileForm user={user} setUser={setUser}/> : '' }
        </Col>
      </Row>
    </Container>
  </div>
  );
}
Profile.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func
};
export default Profile;
