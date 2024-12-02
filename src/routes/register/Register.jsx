import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(typeof username, email, password);

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      //   console.log(res.data);
      toast.success("Successfully Registered!");
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
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
          <button disabled={isLoading} type="submit">
            Register
          </button>
          {error && <span>{error}</span>}
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
