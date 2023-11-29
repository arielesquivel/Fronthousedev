import React, { useState } from "react";
import Calendar from "react-calendar";

let ValuePiece = Date | null;

let Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendario() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
export default Calendario;
