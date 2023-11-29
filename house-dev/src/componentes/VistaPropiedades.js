import React from "react";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";
import Calendar from "./Calendar";
function VistaPropiedades() {
  return (
    <>
      <Navbar />
      <div>
        <div className="vistadepropiedades">
          <div className="col-md-2">
            <div className="img-vistadepropiedades">
              <img src="#" alt="#" />
              <div>
                <h1 placeholder="nombre de la propiedad">Alquiler/Venta</h1>
                <p placeholder="Descripcion">
                  Descripcion: muy buena vista al mar
                </p>
                <p placeholder="Precio">Precio:$1000000</p>
                <p placeholder="Tamaño">Metros:1000 m2</p>
                <p placeholder="Ubicacion">Ubicacion:Calle 10 # 10 </p>
                <p placeholder="Tipo de Propiedad">Tipo:Casa</p>
                <p placeholder="Cantidad de dormitorios">Dormitorios:2</p>
                <p placeholder="Cantidad de baños">Baños:3</p>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Reservar visita
            </button>
            <div className="calendario-conteiner">
              <div className="calendario">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VistaPropiedades;
