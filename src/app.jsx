import React from "react";

import Header from "./tp2-test/header";
import Content from "./tp2-test/Content";
import Footer from "./tp2-test/footer";


function App() {
  return (
    <div className="App">
      <Header />    {/* Affiche le haut du site */}
      <Content />   {/* Affiche les produits */}
      <Footer />    {/* Affiche le bas de page */}
    </div>
  );
}

export default App;

