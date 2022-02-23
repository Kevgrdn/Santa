import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './component/home';
import Draw from './component/draw';

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/draw" element={<Draw />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
