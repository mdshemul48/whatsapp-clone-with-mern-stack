import { useState, useContext } from 'react';

import authContext from "./context/authContext"
import Chat from './Chat/Chat';
import SideBar from './SideBar/SideBar';
import Login from './login/Login';
import classes from "./App.module.css"

function App() {
  const { authInfo } = useContext(authContext)

  if (!authInfo)
    return <Login />

  return (
    <div className={classes.app}>
      <div className={classes.app__body}>
        {/* site bar component*/}
        <SideBar />

        {/* chat component*/}
        <Chat />
      </div>

    </div>
  );
}

export default App;
