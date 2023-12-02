import React from "react";
import axios from "axios";
import { Redirect, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  const [redirect, setRedirect] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        formData,
        { withCredentials: true }
      );
      console.log("Inicio de sesión exitosa", response.data);
      navigate("/home");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Usuario o contraseña incorrecta");
      } else {
        setError("Error inesperado. Inténtalo de nuevo");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div class="container">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="container_2">
              <h1>
                OF DEV.<p>Tu vivienda está aquí...</p>
              </h1>
            </div>

            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              name="password"
              placeholder="Enter password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
