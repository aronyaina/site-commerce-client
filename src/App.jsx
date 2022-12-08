import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/authentication/useAuthContext";
import { useState } from "react";
import { useEffect } from "react";
// Pages
import Signup from "./pages/users/Signup";
import Login from "./pages/users/Login";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/users/Home";
import { Buying } from "./pages/users/Buying";
import Cart from "./pages/users/Cart";

// Components
import Navbar from "./components/layout/navbar";

function App() {
  const { user } = useAuthContext();
  const [isAdmin, setRoles] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.roles === "admin") {
        setRoles(true);
        console.log(isAdmin);
      } else {
        setRoles(false);
      }
    }
    console.log("is admin ", isAdmin);
  }, [user, isAdmin]);

  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/cart" element=<Cart /> />
            <Route
              path="/dashboard"
              element={!isAdmin ? <Navigate to="/home" /> : <Dashboard />}
            />
            <Route path="/buying" element=<Buying /> />{" "}
            <Route path="/home" element=<Home /> />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/dashboard" />}
            />{" "}
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/dashboard" />}
            />{" "}
          </Routes>{" "}
        </div>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
