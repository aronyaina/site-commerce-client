import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./features/authentication/hooks/useAuthContext";
import { useCartContext } from "./features/shopping/hooks/useCartContext";
import { useState } from "react";
import { useEffect } from "react";
// Pages
import Signup from "./pages/users/Signup";
import Login from "./pages/users/Login";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/users/Home";
import { Shopping } from "./pages/users/Shopping";
import Cart from "./pages/users/Cart";
import Shipping from "./pages/users/Shipping";
import Payement from "./pages/users/Payement";
import Order from "./pages/users/Order";
import AboutComponent from "./components/layout/home/AboutComponent";
// Components
import Navbar from "./components/layout/general/NavbarHead";

function App() {
  const { user } = useAuthContext();
  const { state: cartState, dispatch: cartDispatch } = useCartContext();

  const {
    cart: { shippingAdress, payementMethod },
  } = cartState;

  const [access, setAccess] = useState(true);
  useEffect(() => {
    if (user !== null) {
      if (user.roles === "user") {
        setAccess(false);
      }
    } else {
      setAccess(false);
    }
  }, [user, access, setAccess]);

  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/buying" element={<Shopping />} />{" "}
            <Route path="/placeorder" element={<Order />}></Route>
            <Route
              path="/dashboard"
              element={access ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route path="/" element={<Home />} />
            <Route
              path="/shipping"
              element={!user ? <Signup /> : <Shipping />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/dashboard" />}
            />{" "}
            <Route
              path="/payement"
              element={!user ? <Signup /> : <Payement />}
            />{" "}
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/dashboard" />}
            />{" "}
          </Routes>{" "}
        </div>{" "}
        <AboutComponent />
        
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
