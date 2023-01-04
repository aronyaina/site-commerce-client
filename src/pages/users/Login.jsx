import { useState } from "react";
import { UilEye } from "@iconscout/react-unicons";
import { UilEyeSlash } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { Container ,Button} from "react-bootstrap";
import { useLogin } from "../../features/authentication/hooks/useLogin";

import TemporaryMessage from "../../components/layout/general/TemporaryMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const [passwordShown, setPasswordShown] = useState(false);

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
  const togglePass = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
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
          <label> Mot de passe: </label>{" "}
          
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            value={password}
            onChange={onHandleChange}
            className="mdpInput"
          />{" "}
          <Button
            onClick={
              togglePass
            }
            variant="outline-dark"
            className="showPass mb-3"
          >
            {passwordShown ?  <><UilEyeSlash/> Cacher le mot de passe.</>:<><UilEye/> Montrer le mot de passe.</>} 
          </Button>
          <p>
            Si vous n'avez pas de compte vous pouvez <br />
            vous inscrire <Link to="/signup">ici</Link>
          </p>
          <button disabled={isLoading}> Se connecter </button>{" "}
          {error && (
            <TemporaryMessage title="Erreur :" variant="warning">
              {" "}
              {error}{" "}
            </TemporaryMessage>
          )}{" "}
        </form>
      </Container>
    </div>
  );
};

export default Login;
