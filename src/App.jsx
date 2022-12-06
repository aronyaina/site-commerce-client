import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// Pages and components
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import Navbar from "./components/navbar";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Dashboard /> : <Navigate to="/home" />}
            />{" "}
            <Route path="/home" element={<Home />} />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />{" "}
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />{" "}
          </Routes>{" "}
        </div>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
