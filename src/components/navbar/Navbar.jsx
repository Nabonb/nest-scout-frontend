import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
        <Link to="/">Sign in</Link>
        <Link className="register" to="/">
          Sign up
        </Link>
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
          <Link to="">Sign in</Link>
          <Link to="">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
