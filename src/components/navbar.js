import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1> M - SHOP </h1>{" "}
        </Link>{" "}
        <nav>
          {user ? (
            <div>
              <span> {user.email} </span>{" "}
              <button onClick={handleClick}> Se deconnecter </button>{" "}
            </div>
          ) : (
            <div>
              <Link to="/login"> Se connecter </Link>{" "}
              <Link to="/signup"> S 'inscrire</Link>{" "}
            </div>
          )}
        </nav>{" "}
      </div>{" "}
    </header>
  );
};

export default Navbar;
