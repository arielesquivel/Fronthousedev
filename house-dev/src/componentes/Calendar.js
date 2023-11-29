import React, { useState } from "react";
import Calendar from "react-calendar";

let ValuePiece = Date | null;

let Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendario() {
  const [data, setData] = useState(new Date());
  const onChange = (data) => {
    setData(data);
  };
  return (
    <div>
      <Calendar onChange={onChange} value={data} />
      {console.log(data)}
    </div>
  );
}
export default Calendario;
