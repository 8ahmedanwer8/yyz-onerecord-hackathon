import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
    </div>
  );
}

export default App;