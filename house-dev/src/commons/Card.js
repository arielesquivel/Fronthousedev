import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Card = ({ data }) => {
  const { category } = useParams();
  console.log(category);
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={
                data?.image
                  ? data.image
                  : "https://www.esneca.lat/wp-content/uploads/disen%CC%83o-interior.jpg"
              }
              alt="Placeholder image"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{data?.nombre}</h5>
              <p class="card-text">Precio: {data?.precio}</p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Ambientes: {data?.ambientes}
                </small>
              </p>
              <Link to={`/propiedades/${data.id}`}>
                <button class="btn btn-outline-primary">ver mas</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
