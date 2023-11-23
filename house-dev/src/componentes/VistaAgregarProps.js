import React from "react";
import Navbar from "./Navbar";
function VistaAgregarProps() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Agregar Propiedad</h1>
        <form>
          <label htmlFor="nombrePropiedad">Nombre de la propiedad: </label>
          <input
            type="text"
            name="nombrePropiedad"
            id="nombre"
            placeholder="Nombre"
          />
          <label htmlFor="direccion">Dirección: </label>

          <input
            type="text"
            name="direccion"
            id="direccion"
            placeholder="Direccion"
          />
          <label htmlFor="Descripcion">Descripcion</label>
          <input
            type="text"
            name="Descripcion"
            id="Descripc"
            placeholder="Descripcion"
          />
          <label htmlFor="precio">Precio: </label>
          <input
            type="number"
            name="precio"
            id="precio"
            min="0"
            max="9999999"
            placeholder="$USD"
          />
          <label htmlFor="tipo">Tipo de propiedad: </label>
          <select name="tipo" id="tipo">
            <option>Casa</option>
            <option>Departamento</option>
            <option>Local</option>
            <option>Lote</option>
          </select>
          <label htmlFor="tipo">Dormitorios: </label>
          <input type="number" min="0" max="4" placeholder="Dormitorios" />
          <label htmlFor="tipo">Baños: </label>
          <input type="number" min="0" max="4" placeholder="Baños" />
          <label htmlFor="tipo">Metros cuadrados: </label>
          <input type="number" min="0" max="999999" placeholder="Mts" />
          <label htmlFor="img">Imagenes :</label>
          <input type="file" multiple accept=".jpg,.png, .jpeg" />
          <label type="contacto">Contacto</label>
          <input name="contacto" placeholder="Ingrese su numero de contacto" />
          <button type="submit">Publicar Propiedad</button>
        </form>
      </div>
    </>
  );
}

export default VistaAgregarProps;
