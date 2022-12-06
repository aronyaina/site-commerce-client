import { useState } from "react";
import { useSignup } from "../../hooks/Auth/useSignup";

const Signup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, surname, password, email);
    await signup(name, surname, password, email);
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
    <form action="" className="signup" onSubmit={handleSubmit}>
      <h3> S 'inscrire. </h3> <label> Name: </label>{" "}
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
      <button disabled={isLoading}> S 'inscrire</button>{" "}
      {error && <div className="error"> {error} </div>}{" "}
    </form>
  );
};

export default Signup;
