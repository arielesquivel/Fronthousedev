import React from "react";
import "../App.css";
import "bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { del_user } from "../store/user";
import { RxAvatar } from "react-icons/rx";
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.user;
  });
  const handleLogout = async () => {
    try {
      // Realiza la solicitud de cierre de sesión al servidor
      await axios.post("http://localhost:5000/api/logout", null, {
        withCredentials: true,
      });
      dispatch(del_user(""));
      // Después de cerrar sesión, redirige a la página de inicio de sesión
      navigate("/home");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };
  let complement_1 = "";
  if (user.rol === "ADMIN") {
    complement_1 = "custom-navbar2";
  } else {
    complement_1 = "custom-navbar";
  }

  return (
    <>
      <nav class={`navbar navbar-expand-lg ${complement_1}`}>
        <div class="container-fluid">
          <h1 class="navbar-brand">
            H<span className="od">OD.</span>
          </h1>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/buscador">
                  Alquiler/Ventas
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ver mas
                </a>
                <ul class="dropdown-menu">
                  {!user.rol && (
                    <>
                      <li>
                        <Link class="dropdown-item" to="/login">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/register">
                          Registrate
                        </Link>
                      </li>
                    </>
                  )}
                  {user?.rol === "ADMIN" ? (
                    <>
                      <li>
                        <Link to="/admin/agregar" class="dropdown-item">
                          Agregar Propiedades
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/citas" class="dropdown-item">
                          Citas
                        </Link>
                      </li>
                    </>
                  ) : null}
                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li>
                    <Link class="dropdown-item" to="/Favoritos">
                      Favoritos
                    </Link>
                  </li>
                </ul>
              </li>
              {user.rol && (
                <li class="nav-item">
                  <Link to="/usuarios" class="nav-link " aria-disabled="true">
                    Mi Perfil
                  </Link>
                </li>
              )}
            </ul>
            {user.rol && (
              <>
                <div>
                  <p className="mensP">
                    Bienvenido: {user.name} <RxAvatar />
                  </p>
                </div>
                <button onClick={handleLogout} class="btn btn-light btn1">
                  <Link>Logout</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>*/}
    </>
  );
}

export default Navbar;
