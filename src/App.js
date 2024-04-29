import { Outlet } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToken } from "./helpers/token";
import { getAuthUser } from "./thunks/authThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getToken()) {
      dispatch(getAuthUser());
    }
  }, []);
  return <div>
    <Outlet />
  </div>;
}

export default App;
