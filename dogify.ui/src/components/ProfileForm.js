import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Form, Row, Col, FormGroup, Label, Input, Button
} from 'reactstrap';
import { getSingleUserById, updateUser } from '../helpers/data/userData';

export default function ProfileForm({ user, setUser }) {
  const { id } = useParams();
  const [userObject, setUserObject] = useState({
    breedId: user?.breedId,
    username: user?.username || '',
    imageUrl: user?.imageUrl || '',
  });
  useEffect(() => {
    getSingleUserById(id).then(setUserObject);
  }, [user]);
  const handleInputChange = (e) => {
    setUserObject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    updateUser(id, userObject).then((resp) => setUser(resp));
  };

  return (
    <Form className='p-5'>
      <Label>Information</Label>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" name="username" id="username" defaultValue={userObject.username} onChange={handleInputChange}/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="imageUrl">Image Url</Label>
            <Input type="url" name="imageUrl" id="imageUrl" defaultValue={userObject.imageUrl} onChange={handleInputChange}/>
          </FormGroup>
        </Col>
      </Row>
      <Button onClick={() => handleSubmit()}>SUBMIT</Button>
    </Form>
  );
}
ProfileForm.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
};
