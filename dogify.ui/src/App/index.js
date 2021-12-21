import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import 'firebase/auth';
import './App.scss';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import { createUser, getSingleUserByGoogleId } from '../helpers/data/userData';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfo = {
          username: authed.email.split('@gmail.com')[0],
          googleId: authed.uid,
          imageUrl: authed.photoURL,
          breedId: null,
        };
        getSingleUserByGoogleId(authed.uid).then((response) => {
          if (response === '') {
            createUser(userInfo).then(setUser);
          } else {
            setUser(response);
          }
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <div className='App'>
     <Router>
       {
         user !== null && user?.breedId !== '00000000-0000-0000-0000-000000000000' ? <NavBar user={user}/> : ''
       }
        <Routes user={user} setUser={setUser}/>
     </Router>
    </div>
  );
}

export default App;
