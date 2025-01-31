import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  console.log(open);

  return (
    <nav>
      <div className="left">
        <Link className="logo" to="./">
          <img src="./logo.png" alt="" />
          <span>NestScout</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Agents</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link className="register" to="/register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="">Home</Link>
          <Link to="">About</Link>
          <Link to="">Contact</Link>
          <Link to="">Agents</Link>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
