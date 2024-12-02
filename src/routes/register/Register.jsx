import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(typeof username, email, password);
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
          />
          <input name="email" id="email" type="text" placeholder="Email" />
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Register</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
