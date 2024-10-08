import './App.css';
import './style/customStyle.css';
// import 'react-toastify/dist/ReactToastify.css';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import SocketState from "./context/SocketState"
import Room from './components/Room';
import PeerState from './context/PeerState';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Home from './components/Home';
import HomeMain from './components/HomeMain';



function App() {
  return (
    <>
    <div>
      <SocketState>
        <PeerState>
         <HashRouter>

          <Routes>
            {/* <Route path="/" element={<HomeMain />} /> */}
            <Route path="/home" element={<Home/>} />
            <Route path="/room/:roomId" element={<Room />} />

            <Route path="/" element={<Home2/>} />
            <Route path="/signup" element={<Home3 />} />

          </Routes>

        </HashRouter>
        </PeerState>
      </SocketState>
      </div>
    </>
  );
}

export default App;
