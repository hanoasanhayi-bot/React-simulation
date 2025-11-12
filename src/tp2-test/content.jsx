import Card from "./Card";

function Content() {
  const style = {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#fce4ec",
    minHeight: "400px",
  };

  const cardsContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  };

  return (
    <div style={style}>
      <h1>Nos produits</h1>
      <div style={cardsContainer}>
        <Card
          title="Bougie artisanale"
          image="/images/bougie.jpg"
          description="Une belle bougie faite à la main."
        />
        <Card
          title="Fleur en cire"
          image="/images/fleur.jpg"
          description="Fleur décorative en cire parfumée."
        />
        <Card
          title="Coffret cadeau"
          image="/images/coffret.jpg"
          description="Coffret élégant pour offrir."
        />
      </div>
    </div>
  );
}

export default Content;

