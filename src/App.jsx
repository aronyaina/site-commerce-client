import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { useState } from "react";
import { useEffect } from "react";
// Pages and components
import Signup from "./pages/users/Signup";
import Login from "./pages/users/Login";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/users/Home";
import { Buying } from "./pages/users/Buying";

import Navbar from "./components/admin/layout/navbar";

function App() {
  const { user } = useAuthContext();
  const [isAdmin, setRoles] = useState(false);

  useEffect(() => {
    if (user) {
      const { email, roles, id, token } = user;
      if (roles === "admin") {
        setRoles(true);
      } else {
        setRoles(false);
      }
    }
  }, [user]);

  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/dashboard"
              element={
                user && isAdmin ? <Dashboard /> : <Navigate to="/home" />
              }
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
