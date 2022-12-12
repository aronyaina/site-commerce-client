import { useState } from "react";
import { useLogin } from "../../features/authentication/hooks/useLogin";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Helmet from "../../components/layout/helmet";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  const onHandleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Container className="login">
        <form action="" className="login-form" onSubmit={handleSubmit}>
          <h3> SE CONNECTER</h3>
          <label> Email: </label>{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={onHandleChange}
          />{" "}
          <label> Password: </label>{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={onHandleChange}
          />{" "}
          <p>
            Si vous n'avez pas de compte vous pouvez <br />
            vous inscrire <Link to="/signup">ici</Link>
          </p>
          <button disabled={isLoading}> Se connecter </button>{" "}
          {error && <div className="error"> {error} </div>}{" "}
        </form>
      </Container>
    </div>
  );
};

export default Login;
