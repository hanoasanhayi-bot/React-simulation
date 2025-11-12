import Menu from "./Menu";

function Header() {
  const styleHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8b7e4",
    padding: "10px 20px",
    borderBottom: "2px solid #f682d5",
  };

  const styleButtons = {
    margin: "5px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    cursor: "pointer",
  };

  return (
    <header style={styleHeader}>
      <img src="/images/logo.png" alt="Logo" width="80" />
      <Menu />
      <div>
        <button style={styleButtons}>Se connecter</button>
        <button style={styleButtons}>S'inscrire</button>
      </div>
    </header>
  );
}

export default Header;

