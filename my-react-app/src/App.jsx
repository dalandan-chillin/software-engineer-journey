import "./App.css";
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
   
function App() {


  return (
    
    <div className="container">

      <nav className="navbar">

      <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "active" : ""
  }
>
       🏠 Home
      </NavLink>

      {" | "}

      <NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "active" : ""
  }
>
       ℹ️ About
      </NavLink>

      {" | "}

      <NavLink
  to="/users"
  className={({ isActive }) =>
    isActive ? "active" : ""
  }
>
       👥 Users
      </NavLink>

    </nav>

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/users"
        element={<Users />}
      />

    </Routes>

  </div>

);

}
   
export default App;