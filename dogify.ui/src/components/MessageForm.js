import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';
import { createMessage, getMessages } from '../helpers/data/messageData';

function MessageForm({ currentUser, setMessages }) {
  const [message, setMessage] = useState({
    userId: currentUser?.id,
  });

  const handleInputChange = (e) => {
    setMessage((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createMessage(message).then(() => getMessages().then(setMessages));
  };

  return (
    <Form onSubmit={handleSubmit} className='mx-auto w-50'>
      <FormGroup>
        <Label for='messageText'>Text</Label>
        <Input id='messageText' name='messageText' placeholder='message text here...' type='textarea' onChange={handleInputChange}/>
      </FormGroup>
      <Button type='submit'>
        Submit
      </Button>
    </Form>
  );
}
MessageForm.propTypes = {
  setMessages: PropTypes.func,
  currentUser: PropTypes.any,
};

export default MessageForm;
