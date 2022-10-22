import "./App.css";
import { Route, Switch, Router } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AirlinesLogin from "./Pages/AirlinesLogin";
import WarehouseLogin from "./Pages/WarehouseLogin";
import AirlinesPage from "./Pages/AirlinePageComponents/AirlinesPage";
import CreateOrders from "./Pages/AirlinePageComponents/CreateOrders";
import ManageOrders from "./Pages/AirlinePageComponents/ManageOrders";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/airlines-login" component={AirlinesLogin} />
      <Route path="/warehouse-login" component={WarehouseLogin} />
      <Route exact path="/airline/create-orders" component={CreateOrders} />
      <Route path="/airline/manage-orders" component={ManageOrders} />
    </div>
  );
}

export default App;
