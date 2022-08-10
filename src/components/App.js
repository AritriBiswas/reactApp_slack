import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import firebase from "./firebase"
import "firebase/messaging"
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './Chat'
import Login from './Login';
import { useStateValue } from './StateProvider';
// import AddChannelDialogbox from './AddChannelDialogbox';

function App() {
  const [{ user }, dispatch] = useStateValue();
  // React.useEffect(()=>{
  //   const msg = firebase.messaging()
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();

  //   }).then((data) => {
  //     console.log("token",data)
  //   })
  // })

  console.log(user)

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (

            <>
            {/* <AddChannelDialogbox/> */}
              <Header />
              <div className="app__body">
                <Sidebar />
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>

                </Switch>
              </div>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;