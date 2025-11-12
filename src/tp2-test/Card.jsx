function Card({ title, image, description }) {
  const style = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "250px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    backgroundColor: "white",
  };

  return (
    <div style={style}>
      <img
        src={image}
        alt={title}
        width="100%"
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;

