import { Outlet } from "react-router-dom";
import "./App.css";
import PageHome from "./client/pages/home/pageHome";

function App() {
  return <div>
    <Outlet />
  </div>;
}

export default App;
