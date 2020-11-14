import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";
import React from "react";
import ReactDOM from "react-dom";
import { LocalizeProvider } from "react-localize-redux";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizeProvider store={store}>
        <App />
      </LocalizeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
