import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import { useState } from "react";
import axios from "axios";
function VistaAgregarProps() {
  const [form, setForm] = useState({});
  const [ambientes, setAmbientes] = useState({
    dormitorios: 0,
    baños: 0,
  });
  const [isCheckedAlquilar, setCheckedAlquilar] = useState(false);
  const [isCheckedVender, setCheckedVender] = useState(false);

  const handleCheckboxChangeAlquilar = () => {
    setCheckedAlquilar(!isCheckedAlquilar);
  };
  const handleCheckboxChangeVender = () => {
    setCheckedVender(!isCheckedVender);
  };

  const handleA = (e) => {
    e.preventDefault();
    const ambiente =
      parseInt(ambientes.dormitorios) + parseInt(ambientes.baños);
    const payload = {
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
  };
  const handleB = (e) => {
    form[e.target.name] = e.target.value;
  };
  const handleC = (e) => {
    ambientes[e.target.name] = e.target.value;
  };

  return (
    <>
      <Navbar />
      <div className="VistaAgregarProps">
        <form className="form-agregar-props" onSubmit={handleA}>
          <h1>Agregar Propiedad</h1>
          <label htmlFor="Alquiler / venta">Alquiler/Venta</label>
          <input
            type="text"
            name="nombrePropiedad"
            id="nombre"
            placeholder="Alquiler /venta"
            onChange={handleB}
          />
          <label htmlFor="direccion">Dirección: </label>

          <input
            type="text"
            name="direccion"
            id="direccion"
            placeholder="Direccion"
            onChange={handleB}
          />
          <label htmlFor="Descripcion">Descripcion</label>
          <input
            type="text"
            name="descripcion"
            id="Descripc"
            placeholder="Descripcion"
            onChange={handleB}
          />
          <label htmlFor="precio">Precio: </label>
          <input
            type="number"
            name="precio"
            id="precio"
            min="0"
            max="9999999"
            placeholder="$USD"
            onChange={handleB}
          />
          <label htmlFor="tipo">
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
          </label>
          <label htmlFor="tipo">Tipo de propiedad: </label>
          <select name="tipo" id="tipo" onChange={handleB}>
            <option>Casa</option>
            <option>Departamento</option>
            <option>Local</option>
            <option>Lote</option>
          </select>
          <label htmlFor="tipo">Dormitorios: </label>
          <input
            type="number"
            min="0"
            max="4"
            placeholder="Dormitorios"
            name="dormitorios"
            onChange={handleC}
          />
          <label htmlFor="tipo">Baños: </label>
          <input
            type="number"
            min="0"
            max="4"
            placeholder="Baños"
            name="baños"
            onChange={handleC}
          />
          <label htmlFor="tipo">Metros cuadrados: </label>
          <input
            type="number"
            min="0"
            max="999999"
            placeholder="Mts"
            name="metraje"
            onChange={handleB}
          />
          <label type="contacto">Contacto</label>
          <input name="contacto" placeholder="Ingrese su numero de contacto" />
          <label htmlFor="img">Imagenes :</label>
          <input type="file" multiple accept=".jpg,.png, .jpeg" />
          <button type="submit">Publicar Propiedad</button>
        </form>
      </div>
    </>
  );
}

export default VistaAgregarProps;
