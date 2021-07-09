import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ username, messageData }, ref) => {
  const isUser = username === messageData.username;
  return (
    <div ref={ref} className={`message ${isUser && 'message_user'}`}>
      <Card className={isUser ? 'message__userCard' : 'message__guestcard'}>
        <CardContent>
          <Typography color='white' variant='h5' component='h2'>
            {!isUser && `${messageData.username || 'Unknown'} :`}{' '}
            {messageData.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
