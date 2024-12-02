import { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import apiRequest from "../../lib/apiRequest.js";

function Login() {
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsloading(true);

    const username = e.target.username.value;
    const password = e.target.password.value;

    // console.log(typeof username, email, password);

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      // console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data)); //Beacuse local storage cannot store object thats why converting it into the string
      toast.success("Successfully Login!");
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            id="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            id="password"
            required
            type="password"
            placeholder="Password"
          />
          <button disabled={isloading} type="submit">
            Login
          </button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
