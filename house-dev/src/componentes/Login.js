import React from "react";

function Login() {
  return (
    <>
      <div className="image-background"></div>
      <div className="login">
        <div>
          <form>
            <h2>Iniciar Sesión</h2>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleInputChange}
              />
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                // value={formData.password}
                //onChange={handleInputChange}
              />
              <button>Iniciar Sesión</button>
              <p>olvidaste tu contraseña</p>
              <p>Registrate aqui</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
