import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/bootstrap_custom.scss";

import App from "./App";
import allStates from "./lib/globalStates";

import reportWebVitals from "./reportWebVitals";

//STORE -> global state
const store = createStore(
  allStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //__REDUX_DEVTOOLS_EXTENSION__ for chrome redux inspection

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
