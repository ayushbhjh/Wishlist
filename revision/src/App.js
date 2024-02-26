import React, { useState } from "react";
import "./App.css";
import Userinp from "./comp/Userinp";
import Data from "./comp/Data";
function App() {
  const [wishlist, setwishlist] = useState([]);
  function addtowishlist(newwish) {
    setwishlist([...wishlist, newwish]);
  }
  return (
    <div className="container">
      <div className="wishlist">
        <Userinp addtowishlist={addtowishlist} />
        <Data wishlist={wishlist} />
      </div>
    </div>
  );
}

export default App;
