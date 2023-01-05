import './App.css';
import Add from "./Components/Add.js";
import {Route, Routes} from "react-router-dom";
import Update from "./Components/Update";
import React from "react";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path="/update" element={<Update/>} />
            <Route exact path="/" element={<Add/>} />
        </Routes>
    </div>
  );
}

export default App;
