import React from 'react';
import logo from './logo.svg';
import './App.css';
import liff from '@line/liff/dist/lib';

async function sendMessage() {
  try {
    await liff.init({ liffId : process.env.REACT_APP_LIFF_ID as string });
    if(!liff.isLoggedIn()) {
      liff.login({});
    } else if (liff.isInClient()) {
      await liff.sendMessages([{
        'type': 'text',
        'text': "You've successfully sent a message! Hooray!"
      }]);
      window.alert('Message sent');
    }
  } catch(error) {
    window.alert('Error sending message: ' + error);
  }
}

async function getUserInfo() {
  try {
    await liff.init({ liffId : process.env.REACT_APP_LIFF_ID as string });
    if(!liff.isLoggedIn()) {
      liff.login({});
    } else if (liff.isInClient()) {
      const profile : any = await liff.getProfile();
      const userId : string = profile.userId;
      const displayName: string = profile.displayName;
      alert(`Name: ${displayName}, userId: ${userId}`);
    }
  } catch (error) {
    window.alert('Error sending message: ' + error);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
