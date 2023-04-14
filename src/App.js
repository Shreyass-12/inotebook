
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import { Home } from './components/Home';
import NoteState from './context/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Image from './components/Image';


function App() {
  const [alert, setAlert] = useState();
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />}>
              </Route>
              <Route path="/about" element={<About />}>
              </Route>
              <Route path="/Login" element={<Login showAlert={showAlert} />}>
              </Route>
              <Route path="/Image" element={<Image  />}>
              </Route>
              <Route path="/Signup" element={<Signup showAlert={showAlert} />}>
              </Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
