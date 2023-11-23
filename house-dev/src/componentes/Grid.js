import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card from "../commons/Card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Grid = (props) => {
  const { type } = useParams();
  const collection = props[type];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const propiedades = useSelector((state) => {
    return state.propiedades;
  });

  return (
    <div className="columns is-multiline layout">
      {propiedades.map((data) => (
        <div className="column is-4" key={data.id}>
          <Card data={data} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
