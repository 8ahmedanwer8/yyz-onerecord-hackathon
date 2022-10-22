import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AirlinesLogin from "./Pages/AirlinesLogin";
import WarehouseLogin from "./Pages/WarehouseLogin";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/airlines-login" component={AirlinesLogin} />
      <Route path="/warehouse-login" component={WarehouseLogin} />
    </div>
  );
}

export default App;
