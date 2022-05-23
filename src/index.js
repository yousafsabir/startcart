import React from "react";
import ReactDOM from "react-dom/client";
import Store from "./store/Store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
);
