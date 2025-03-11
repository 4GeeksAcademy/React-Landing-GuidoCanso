import React from "react";
import Navbar from "./components/Navbar.jsx";
import Jumbotron from "./components/Jumbotron.jsx";
import Card from "./components/Card.jsx";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container d-flex justify-content-center">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default App;
