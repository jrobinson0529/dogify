import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { getSingleUserById } from '../helpers/data/userData';
import { deleteMessage } from '../helpers/data/messageData';

function MessageCard({ message, currentUser, setMessages }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    getSingleUserById(message.userId).then(setUser);
  }, []);
  const handleClick = () => {
    deleteMessage(message.id).then((response) => setMessages(response));
  };

  return (
    <Card
    >
      <CardBody>
        <CardTitle tag="h5">
          {user.username}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {message.messageTime}
        </CardSubtitle>
        <CardText>
          {message.messageText}
        </CardText>
        {
          user?.id === currentUser?.id ? <Button color='danger' onClick={handleClick}>
          Delete
        </Button> : ''
        }
      </CardBody>
    </Card>
  );
}
MessageCard.propTypes = {
  message: PropTypes.object,
  currentUser: PropTypes.any,
  setMessages: PropTypes.func,
};

export default MessageCard;
