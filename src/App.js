import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages and components
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
          </Routes>
        </div>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
