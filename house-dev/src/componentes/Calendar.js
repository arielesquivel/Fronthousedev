import React, { useState } from "react";
import Calendar from "react-calendar";
import { useDispatch } from "react-redux";
import axios from "axios";

let ValuePiece = Date | null;

let Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendario(prop) {
  const id = prop;
  const [data, setData] = useState(new Date());
  const onChange = (data) => {
    setData(data);
  };

  const handleClick = () => {
    if (!data) {
      alert("por favor, seleccione una fecha");
    } else {
      const payload = {
        propiedad_id: id,
        fecha: data,
      };
      axios
        .post("http://localhost:5000/api/cita", payload, {
          withCredentials: true,
        })
        .then((result) => {
          console.log(result);
          alert("cita registrada");
        })
        .catch((error) => {
          console.log(error);
          alert("hubo un problema, por favor intentelo devuelta");
        });
    }
  };

  return (
    <div>
      <Calendar onChange={onChange} value={data} />
      {console.log(data)}

      <button type="submit" className="btn" onClick={handleClick}>
        Reservar visita
      </button>
    </div>
  );
}
export default Calendario;
