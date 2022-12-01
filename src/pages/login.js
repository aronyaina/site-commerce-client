import { useState } from "react";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };
  const onHandleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
      default:
        break;
    }
  };

  return (
    <form action="" className="login" onSubmit={handleSubmit}>
      <h3> Se connecter </h3>
      <label> Email: </label>
      <input
        type="email"
        onChange={onHandleChange}
        name="email"
        value={email}
      />
      <label> Password: </label>
      <input type="password" name="password" value={password} />
      <button>Se connecter</button>
    </form>
  );
};

export default login;
