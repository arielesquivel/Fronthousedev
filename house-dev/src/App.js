import "./App.css";
import Login from "./componentes/Login";
import Registrer from "./componentes/register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Registrer />
      </header>
    </div>
  );
}

export default App;
