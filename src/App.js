import './App.css';
import React, { useState, useEffect } from 'react';
import Message from './Message';
import db from './firebase';
import { Input, Button, FormControl, InputLabel } from '@material-ui/core';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

// while sending the messages we have to add timestamp first, and while retrieving we have to orderBy with timestamp
function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // run this when the App component Loads
    db.collection('messages')
      .orderBy('timestamp')
      .onSnapshot((snapshot) => {
        // snapshot has the collection which has all the docs in the firebase fire store collection
        setMessages(
          snapshot.docs.map((doc) => ({
            username: doc.data().username,
            message: doc.data().message,
            id: doc.id,
          }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt('Enter your name'));
  }, []); // condition

  const sendMessage = (event) => {
    event.preventDefault();
    // setMessages([...messages, { username: username, text: input }]);
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className='App'>
      <h2> Facebook Messenger Clone</h2>
      <h3> Welcome {username}</h3>
      <form className='app__messageForm'>
        <FormControl className='app__formControl'>
          {/* <InputLabel>Enter your message</InputLabel> */}
          <Input
            placeholder='Enter message'
            value={input}
            id='standard-basic'
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={!input}
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>

        {/* <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></input> */}

        {/* <button type='submit' onClick={sendMessage}>
          Send
        </button> */}
      </form>
      {/* Display Messages */}
      <FlipMove>
        {messages.map((message) => (
          <Message
            // key={message.id}
            username={username}
            messageData={message}
          ></Message>
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
