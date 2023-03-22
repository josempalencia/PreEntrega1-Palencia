import React from "react";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import "./index.css";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="title">José María Palencia</h1>
      </div>
    </>
  );
};

export default App;
