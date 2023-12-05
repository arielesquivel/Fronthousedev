import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../App.css";
import { DateTimePicker } from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

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
      <div>
        <DateTimePicker onChange={onChange} value={data} />
        {console.log(data)}
      </div>
      <div className="btn-calen">
        <button type="submit" class="btn btn-dark " onClick={handleClick}>
          Reservar visita
        </button>
      </div>
    </div>
  );
}
export default Calendario;
