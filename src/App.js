import "./App.css";
import Calculator from "./components/calculator/Calculator";
import logo from "./components/images/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
      <Calculator />
    </div>
  );
}

export default App;
