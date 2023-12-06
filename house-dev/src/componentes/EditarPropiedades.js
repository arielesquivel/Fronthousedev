import React from "react";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import Calendar from "./Calendar";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";
import { TbBrandCashapp } from "react-icons/tb";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function EditarPropiedades() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [changeData, setChangeData] = useState({});
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const user = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/propiedades/${id}`)
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch(() => {
        navigate("/404");
      });
  }, []);

  const [isCheckedAlquilar, setCheckedAlquilar] = useState(data.alquilar);

  const [isCheckedVender, setCheckedVender] = useState(data.vender);

  const handleCheckboxChangeAlquilar = () => {
    setCheckedAlquilar(!isCheckedAlquilar);
  };
  const handleCheckboxChangeVender = () => {
    setCheckedVender(!isCheckedVender);
  };

  const deleteHandle = () => {
    axios
      .delete(`http://localhost:5000/api/propiedades/${id}`)
      .then((res) => res.data)
      .then((data) => navigate("/admin/citas"))
      .catch((error) => {
        console.log(error);
        alert(
          "hubo un error, pruebe devuelta en otro tiempo, o contacte al encargado"
        );
      });
  };

  const handleA = (e) => {
    changeData[e.target.name] = e.target.value;
  };
  const editHandle = (e) => {
    //  navigate("/admin/editar");
    //};
    //const handleSummit = (e) => {
    e.preventDefault();
    const ambientes =
      parseInt(changeData.dormitorios) + parseInt(changeData.baños);
    const payload = [...changeData];
    payload.alquilar = isCheckedAlquilar;
    payload.vender = isCheckedVender;
    payload.ambientes = ambientes;

    axios
      .put("http://localhost:5000/api/propiedades/cambiar/", formData, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(result);
        navigate("/admin/propiedades");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "hubo un problema. Por favor recargue la pagina o contactese con un administrador"
        );
      });
    /*{
 axios.post(
        
        
      );


      nombre: form.nombrePropiedad,
      alquilar: isCheckedAlquilar,
      vender: isCheckedVender,
      categoria: form.tipo || "casa",
      ambientes: ambiente,
      baños: parseInt(ambientes.baños),
      dormitorios: parseInt(ambientes.dormitorios),
      disponibilidad: true,
      direccion: form.direccion,
      localidad: "cacsa",
      localizacion: "ascac",
      precio: parseInt(form.precio),
      metraje: parseInt(form.metraje),
      description: form.descripcion,
    };
*/
    /*
    if (
      !payload.nombre ||
      !payload.categoria ||
      !payload.ambientes ||
      !payload.direccion ||
      !payload.precio ||
      !payload.description ||
      (!payload.alquilar && !payload.vender) ||
      !payload.baños ||
      !payload.dormitorios
    ) {
      alert("datos incorrectos");
    } else {
      axios
        .post("http://localhost:5000/api/propiedades", payload, {
          withCredentials: true,
        })
        .then(alert("exitoso posteo"))
        .catch((error) => {
          alert(error);
        });
    }
    */
  };

  if (!data.id) {
    return (
      <>
        <Navbar />
        <div className="sweet-loading">
          <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
          <input
            value={color}
            onChange={(input) => setColor(input.target.value)}
            placeholder="Color of the loader"
          />
          <p>Buscando Datos</p>

          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.esneca.lat/wp-content/uploads/disen%CC%83o-interior.jpg"
                alt="foto1"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://novalproperties.com/images/projects/jardines-img-5.jpg"
                alt="foto1"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.esneca.lat/wp-content/uploads/disen%CC%83o-interior.jpg"
                alt="foto1"
                class="d-block w-100"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <div className="vistadepropiedades">
            <div className="col-md-2">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="nombre de la propiedad"
                value={changeData.nombre || data.nombre}
                onChange={handleA}
              />
              <label>Descripcion:</label>
              <input
                placeholder="Descripcion"
                type="text"
                name="description"
                id="Descripc"
                value={changeData.description || data.description}
                onChange={handleA}
              />
              <label>Precio:</label>
              <input
                type="number"
                name="precio"
                id="precio"
                min="0"
                max="9999999"
                placeholder="$USD"
                value={changeData.precio || data.precio}
                onChange={handleA}
              />
              <label>
                Alquilar
                <input
                  type="checkbox"
                  checked={isCheckedAlquilar}
                  onChange={handleCheckboxChangeAlquilar}
                />
              </label>
              <label>vender</label>
              <input
                type="checkbox"
                checked={isCheckedVender}
                onChange={handleCheckboxChangeVender}
              />
              <label>Metraje:</label>
              <input
                placeholder="Tamaño"
                type="number"
                name="metraje"
                min="0"
                max="999999"
                value={changeData.metraje || data.metraje}
                onChange={handleA}
              />
              <label>Direccion:</label>
              <input
                type="text"
                name="direccion"
                id="direccion"
                placeholder="Direccion"
                value={changeData.direccion || data.direccion}
                onChange={handleA}
              />
              <label>localidad:</label>
              <select
                id="localidad"
                name="localidad"
                value={changeData.localidad || data.localidad}
                onChange={handleA}
              >
                <option value="">Seleccione una opcion</option>
                <option value="Retiro">Retiro</option>
                <option value="San Nicolás">San Nicolás</option>
                <option value="Puerto Madero">Puerto Madero</option>
                <option value="San Telmo">San Telmo</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Constitución">Constitución</option>
                <option value="Recoleta"> Recoleta</option>
                <option value="Balvanera">Balvanera</option>
                <option value="San Cristóbal">San Cristóbal</option>
                <option value="La Boca">La Boca</option>
                <option value="Barracas">Barracas</option>
                <option value="Parque Patricios">Parque Patricios</option>
                <option value="Nueva Pompeya">Nueva Pompeya</option>
                <option value="Almagro">Almagro </option>
                <option value="Boedo">Boedo</option>
                <option value="Caballito">Caballito</option>
                <option value="Flores">Flores</option>
                <option value="Parque Chacabuco">Parque Chacabuco</option>
                <option value="Villa Soldati">Villa Soldati</option>
                <option value="Villa Riachuelo">Villa Riachuelo </option>
                <option value="Villa Lugano">Villa Lugano</option>
                <option value="Liniers">Liniers</option>
                <option value="Mataderos">Mataderos</option>
                <option value="Parque Avellaneda">Parque Avellaneda</option>
                <option value="Villa Real">Villa Real</option>
                <option value="Monte Castro">Monte Castro</option>
                <option value="Versalles">Versalles</option>
                <option value="Floresta">Floresta</option>
                <option value="Vélez">Vélez</option>
                <option value="Sarsfield">Sarsfield</option>
                <option value="Villa Luro">Villa Luro</option>
                <option value="Tres de Febrero">Tres de Febrero</option>
                <option value="Belgrano">Belgrano</option>
                <option value="Palermo">Palermo</option>
                <option value="Once">Once</option>
                <option value="Jesús María">Jesús María</option>
                <option value="Recoleta">Recoleta</option>
                <option value="Glew">Glew</option>
                <option value="Ensenada">Ensenada</option>
                <option value="Esperanza">Esperanza</option>
                <option value="Chivilcoy">Chivilcoy</option>
                <option value="Aldao">Aldao</option>
                <option value="Villa Ortuzar">Villa Ortuzar</option>
                <option value="Bahía Blanca">Bahía Blanca</option>
                <option value="Villa Urquiza">Villa Urquiza</option>
              </select>
              <label>Categoria:</label>
              <select
                id="categoria"
                name="categoria"
                value={changeData.categoria || data.categoria}
                onChange={handleA}
              >
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Local">Local</option>
                <option value="Lote">Lote</option>
              </select>
              <label>Dormitorios:</label>
              <input
                type="number"
                min="0"
                max="4"
                placeholder="Dormitorios"
                name="dormitorios"
                value={changeData.dormitorios || data.dormitorios}
                onChange={handleA}
              />
              <label>Baños:</label>
              <input
                type="number"
                min="0"
                max="4"
                placeholder="Baños"
                name="baños"
                value={changeData.baños || data.baños}
                onChange={handleA}
              />
            </div>
          </div>
          <div>
            {user.rol === "ADMIN" ? (
              <>
                <button type="submit" className="btn" onClick={deleteHandle}>
                  eliminar propiedad
                </button>
                <button type="submit" className="btn" onClick={editHandle}>
                  editar propiedad
                </button>
              </>
            ) : null}
          </div>
        </div>
        <div className="calendario-conteiner">
          <div className="calendario">
            <Calendar prop={data.id} />
          </div>
        </div>
      </>
    );
  }
}
export default EditarPropiedades;
