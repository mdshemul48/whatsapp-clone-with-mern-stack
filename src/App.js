import Chat from './Chat/Chat';
import SideBar from './SideBar/SideBar';

import classes from "./App.module.css"
function App() {
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
