import React from "react";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx"
import Plato from "./components/Plato/Plato.jsx";
import Menu from "./components/Menu/Menu.jsx"
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Menu />
      <Plato />
      <Footer /> 
    </>
  );
}

export default App;
