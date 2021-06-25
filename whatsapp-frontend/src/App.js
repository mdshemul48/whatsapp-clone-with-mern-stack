import { useState } from 'react';

import Chat from './Chat/Chat';
import SideBar from './SideBar/SideBar';
import Login from './login/Login';
import classes from "./App.module.css"
function App() {
  const [token, setToken] = useState(null)

  if (!token)
    return <Login setTokenHandler={setToken} />

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
