import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from 'react-loader-spinner';
import useInterval from '@use-it/interval';
import { BrowserRouter , Route,Routes } from "react-router-dom";


import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import Prediction from "./Components/Predictions";
import NotFound from "./Screens/UnderContruction";

let classifier;

function App() {
 

  return (
    <div className="container">




<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/predict" element={<Prediction/>} />
        <Route path="*" element={<NotFound/>} />
  
      </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;




