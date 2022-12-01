import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages and components
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
