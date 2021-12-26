import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CardGroup } from 'reactstrap';
import DogCard from '../components/DogCard';
import { getUsers } from '../helpers/data/userData';
import { getMessages } from '../helpers/data/messageData';
import MessageCard from '../components/MessageCard';
import MessageForm from '../components/MessageForm';

function Park({ user }) {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getUsers().then(setUsers);
    getMessages().then(setMessages);
  }, []);
  return (
    <>
      <h1 className='title my-5'>Dog Park</h1>
      <CardGroup className='cont mx-auto'>
        {
          users.map((u) => <DogCard key={u.id} user={u}/>)
        }
      </CardGroup>
      <h2 className='title my-5'>Message Board</h2>
      <CardGroup className='w-75 mx-auto'>
        { messages.map((message) => <MessageCard key={message.id} message={message} currentUser={user} setMessages={setMessages}/>)}
      </CardGroup>
      <MessageForm currentUser={user} setMessages={setMessages}/>
    </>
  );
}
Park.propTypes = {
  user: PropTypes.any,
};

export default Park;
