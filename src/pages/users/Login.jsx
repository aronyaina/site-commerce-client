import { useState } from "react";
import { useLogin } from "../../hooks/authentication/useLogin";
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
    <form action="" className="login" onSubmit={handleSubmit}>
      <h3> Se connecter </h3> <label> Email: </label>{" "}
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
      <button disabled={isLoading}> Se connecter </button>{" "}
      {error && <div className="error"> {error} </div>}{" "}
    </form>
  );
};

export default Login;
