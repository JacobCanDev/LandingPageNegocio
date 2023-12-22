import React from "react";
import  ReactDOM  from "react-dom";
//import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
//const root = ReactDOM.createRoot(document.getElementById("root"));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
