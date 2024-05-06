import React, { useState } from "react";
import "./navBar.scss";

function NavBar() {
const[open,setOpen] = useState(false)

  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src="vite.svg" alt="" />
          <span>Book Now!</span>
        </a>
        <a href="/">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        <a href="">SignIn</a>
        <a href="/" className="signup">
          Sign Up
        </a>
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
        </div>
        <div className={open ? "menu active":"menu"}>
          <a href="/">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
