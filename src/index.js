import React from "react";
import  ReactDOM  from "react-dom/client";
import  App  from "./App";
import "./index.css";

function TheWeb() {
    return (
        <App />
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
        <TheWeb />
    </React.StrictMode>
);