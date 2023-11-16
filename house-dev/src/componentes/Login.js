import React from "react";

function Login() {
  return (
    <>
      <div>
        <div className="container">
          <form className="login-form">
            <div className="container_2">
              <h1>
                OF DEV.<p>Tu vivienda esta aqui</p>
              </h1>
            </div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              required
            />
            <label>Password:</label>
            <input
              type="password"
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
