import { useState } from "react";
import { useSignup } from "../../features/authentication/hooks/useSignup";

import { UilEye } from "@iconscout/react-unicons";
import { UilEyeSlash } from "@iconscout/react-unicons";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


const Signup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signup, error, isLoading } = useSignup();
  const [passwordShown, setPasswordShown] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(name, surname, password, email);
  };

  const togglePass = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const onHandleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "surname":
        setSurname(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      
      <Container className="signup">
        <form action="" className="signup-form" onSubmit={handleSubmit}>
          <h3> S 'INSCRIRE. </h3>
          <label> Nom: </label>{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={onHandleChange}
          />{" "}
          <label> Surnom: </label>{" "}
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={onHandleChange}
          />{" "}
          <label> Email: </label>{" "}
          <input
            type="email"
            onChange={onHandleChange}
            name="email"
            value={email}
          />{" "}
          <label> Mot de passe: </label>{" "}
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            value={password}
            onChange={onHandleChange}
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
            Si vous avez pas deja un compte ,vous pouvez <br /> vous connectez{" "}
            <Link to="/login">ici</Link>
          </p>
          <button disabled={isLoading}> S 'inscrire</button>{" "}
          {error && <div className="error"> {error} </div>}{" "}
        </form>
      </Container>
    </div>
  );
};

export default Signup;
