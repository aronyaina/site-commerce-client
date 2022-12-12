import { useState } from "react";
import { useSignup } from "../../features/authentication/hooks/useSignup";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Signup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, surname, password, email);
    signup(name, surname, password, email);
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
    <Container className="signup">
      <form action="" className="signup-form" onSubmit={handleSubmit}>
        <h3> S 'INSCRIRE. </h3>
        <label> Name: </label>{" "}
        <input type="text" name="name" value={name} onChange={onHandleChange} />{" "}
        <label> Surname: </label>{" "}
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
        <label> Password: </label>{" "}
        <input
          type="password"
          name="password"
          value={password}
          onChange={onHandleChange}
        />{" "}
        <p>
          Si vous avez pas deja un compte ,vous pouvez <br /> vous connectez{" "}
          <Link to="/login">ici</Link>
        </p>
        <button disabled={isLoading}> S 'inscrire</button>{" "}
        {error && <div className="error"> {error} </div>}{" "}
      </form>
    </Container>
  );
};

export default Signup;
