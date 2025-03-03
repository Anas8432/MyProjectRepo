import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About1 from './components/About1';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#020630";
      document.body.style.color = "white";
      showAlert("Dark mode has been Enabled", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#020630";
      showAlert("Light mode has been Enabled", "success ");

    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/About1"
              element={<About1 mode={mode}/>}>
            </Route>
            <Route exact path="/"
              element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}


