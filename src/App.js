import './App.css';
import Chat from './Chat/Chat';
import SideBar from './SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      {/* site bar component*/}
      <SideBar />

      {/* chat component*/}
      <Chat />
    </div>
  );
}

export default App;
