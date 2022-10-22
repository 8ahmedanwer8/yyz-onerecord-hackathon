import "./App.css";
import { Route, Switch, Router } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AirlinesLogin from "./Pages/AirlinesLogin";
import WarehouseLogin from "./Pages/WarehouseLogin";
import AirlinesPage from "./Pages/AirlinePageComponents/AirlinesPage";
import CreateOrders from "./Pages/AirlinePageComponents/CreateOrders";
import ManageOrders from "./Pages/AirlinePageComponents/ManageOrders";
import IncomingFlights from "./Pages/WarehousePageComponents/IncomingFlights";
import OrderRequests from "./Pages/WarehousePageComponents/OrderRequests";
import YourWarehouse from "./Pages/WarehousePageComponents/YourWarehouse";
import ManageWarehouse from "./Pages/WarehousePageComponents/ManageWarehouse";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/airlines-login" component={AirlinesLogin} />
      <Route path="/warehouse-login" component={WarehouseLogin} />
      <Route exact path="/airline/create-orders" component={CreateOrders} />
      <Route path="/airline/manage-orders" component={ManageOrders} />
      <Route exact path="/warehouse/order-requests" component={OrderRequests} />
      <Route path="/warehouse/incoming-flights" component={IncomingFlights} />
      <Route path="/warehouse/your-warehouse" component={YourWarehouse} />
      <Route path="/warehouse/manage-warehouse" component={ManageWarehouse} />
    </div>
  );
}

export default App;
