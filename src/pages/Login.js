import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(name, password);
  };
  const onHandleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
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
      <h3> Se connecter </h3>
      <label> Nom: </label>
      <input
        type="text"
        onChange={onHandleChange}
        name="name"
        value={name}
      />{" "}
      <label> Password: </label>{" "}
      <input
        type="password"
        name="password"
        value={password}
        onChange={onHandleChange}
      />{" "}
      <button disabled={isLoading}> Se connecter </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
