import { Component } from "react";

class Menu extends Component {
  render() {
    const style = {
      display: "flex",
      gap: "20px",
    };

    return (
      <nav style={style}>
        <a href="#home">Accueil</a>
        <a href="#produits">Produits</a>
        <a href="#contact">Contact</a>
      </nav>
    );
  }
}

export default Menu;
