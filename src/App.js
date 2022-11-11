import axios from "axios";
import React, { useState, useEffect } from "react";
import Team from "./Components/Team";
import Cart from "./Components/Team/Cart";


function App() {



  return (
    <div className="App">
      <div style={{ display: "flex",justifyContent:"space-evenly"}}>
      <Team />

      <Cart/>
      </div>
    </div>
  );
}

export default App;
