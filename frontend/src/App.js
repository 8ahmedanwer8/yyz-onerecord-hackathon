import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Reviewpage from "./Pages/ReviewPage";
import CreateAccountPage from "./Pages/CreateAccountPage";
import LoginPage from "./Pages/LoginPage";
import LoggedInHomePage from "./Pages/LoggedInHomePage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/info" component={Reviewpage} />
      <Route path="/create-account" component={CreateAccountPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/ahmed" component={LoggedInHomePage} />
    </div>
  );
}

export default App;
