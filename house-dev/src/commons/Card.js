const Card = ({ data }) => {
  return (
    <div className="card">
      <img
        src={data?.image ? data.image : "https://i.imgur.com/M1wbKOT.jpg"}
        alt="Placeholder image"
      />

      <div className="card-text">
        <p>Localidad: {data?.localidad}</p>
        <p>Precio: {data?.precio}</p>
        <p>Ambientes: {data?.ambientes}</p>

        <button>ver mas</button>
      </div>
    </div>
  );
};

export default Card;
