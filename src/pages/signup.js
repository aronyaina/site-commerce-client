import { useState } from "react";

const signup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
      case "name":
        setName(e.target.value);
      case "surname":
        setSurname(e.target.value);
      default:
        break;
    }
  };

  return (
    <form action="" className="signup" onSubmit={handleSubmit}>
      <h3> S 'inscrire. </h3>
      <label> Name: </label>
      <input type="text" name="name" value={name} />
      <label> Surname: </label>
      <input type="text" name="surname" value={surname} />
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

export default signup;
