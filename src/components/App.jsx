import React from "react";

import { Navbar } from "./Navbar/NavBar";
import { ItemListContainer } from "./itemlistcontainer/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      
      <ItemListContainer greeting={"¡BIENVENIDOS A ALMENDRA MCG!"}/>
      
    </>
  );
};

export default App;
