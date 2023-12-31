import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";
import { TbBrandCashapp } from "react-icons/tb";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
const Card = (props) => {
  const [btnFavoritosCheck, setBtnFavoritosCheck] = useState(true);
  const data = props.data.data;
  console.log(data);
  let flag = props.data.flag;
  const user = useSelector((state) => {
    return state.user;
  });
  const handlefavoritosAdd = () => {
    console.log("estos son los datos de la card", data.id);
    axios
      .post(
        "http://localhost:5000/api/favoritos",
        { propiedad_id: data.id },
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        setBtnFavoritosCheck(false);
        console.log(result);
        alert("exitoso posteo");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handlefavoritosDel = () => {
    console.log("estos son los datos de la card", data.id);
    axios
      .delete(
        "http://localhost:5000/api/favoritos",
        { propiedad_id: data.id },
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        setBtnFavoritosCheck(true);
        console.log(result);
        alert("exitoso posteo");
      })

      .catch((error) => {
        alert(error);
      });
  };
  const handleCancelar = () => {
    axios
      .post("http://localhost:5000/api/citas/rechazado", data.email, {
        withCredentials: true,
      })
      .then((result) => {
        setBtnFavoritosCheck(true);
        console.log(result);
        alert("exitoso posteo");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleAceptar = () => {
    axios
      .post("http://localhost:5000/api/citas/aceptado", data.email, {
        withCredentials: true,
      })
      .then((result) => {
        setBtnFavoritosCheck(true);
        console.log(result);
        alert("exitoso posteo");
      })
      .catch((error) => {
        alert(error);
      });
  };

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
              {!flag ? (
                <>
                  <h5 class="card-title">{data?.nombre}</h5>

                  <p class="card-text">
                    Precio:
                    <TbBrandCashapp />
                    {data?.precio}
                  </p>

                  <p class="card-text">
                    <small class="text-body-secondary">
                      <small class="text-body-secondary">
                        <GiBathtub />
                        Baños : {data?.baños}
                      </small>
                      <IoIosBed /> Ambientes : {data?.ambientes}
                    </small>
                    <small>
                      <LiaRulerCombinedSolid /> {data.metraje}
                    </small>
                  </p>
                  {btnFavoritosCheck ? (
                    <button
                      class="btn btn-outline-secondary"
                      onClick={handlefavoritosAdd}
                    >
                      agregar a favoritos
                    </button>
                  ) : (
                    <button
                      class="btn btn-outline-secondary"
                      onClick={handlefavoritosDel}
                    >
                      quitar de favoritos
                    </button>
                  )}
                  <Link to={`/propiedades/${data.id}`}>
                    <button class="btn btn-outline-secondary">ver mas</button>
                  </Link>
                </>
              ) : (
                <>
                  <h5 class="card-title">Cita el Dia:{data?.fecha}</h5>
                  <p class="card-text">
                    Direccion:
                    <IoLocationOutline />
                    {data?.direccion}
                    {data?.localidad}
                  </p>
                  <p class="card-text">
                    <CiMail />
                    Mail:
                    {data?.email}
                  </p>
                  <p class="card-text">
                    <IoIosPhonePortrait />
                    Telefono:
                    {data?.contacto}
                  </p>
                  <p class="card-text">
                    Nombre:
                    {data?.nombre}
                    {data?.apellido}
                  </p>
                  {user.rol === "ADMIN" && (
                    <>
                      <button
                        class="btn btn-outline-secondary"
                        onClick={handleCancelar}
                      >
                        cancelar cita
                      </button>
                      <button
                        class="btn btn-outline-secondary"
                        onClick={handleAceptar}
                      >
                        aceptar cita
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
