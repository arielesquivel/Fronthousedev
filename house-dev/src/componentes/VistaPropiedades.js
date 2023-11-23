import React from "react";
function VistaPropiedades() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 placeholder="nombre de la propiedad">Nombre de la Propiedad</h1>
            <img src="#" alt="#" />
            <p placeholder="Descripcion">muy buena vista al mar</p>
            <p placeholder="Precio">$1000000</p>
            <p placeholder="Tamaño">1000 m2</p>
            <p placeholder="Ubicacion">Calle 10 # 10 </p>
            <p placeholder="Tipo de Propiedad">Casa</p>
            <p placeholder="Cantidad de dormitorios">Dormitorios</p>
            <p placeholder="Cantidad de baños">Baños</p>
            <button type="submit" class="btn btn-primary">
              Reservar visita
            </button>
            <button type="submit" class="btn btn-primary">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VistaPropiedades;
