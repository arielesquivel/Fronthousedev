import { Link } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <div className="card">
      <img
        src={
          data?.image
            ? data.image
            : "https://www.esneca.lat/wp-content/uploads/disen%CC%83o-interior.jpg"
        }
        alt="Placeholder image"
      />

      <div className="card-text">
        <p> {data?.nombre}</p>
        <p>Precio: {data?.precio}</p>
        <p>Ambientes: {data?.ambientes}</p>

        <Link to={`/propiedades/${data.id}`}>
          <button>ver mas</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
