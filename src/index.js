import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./components/App";
import {BrowserRouter} from 'react-router-dom';e

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
<BrowserRouter>
    <App />
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);