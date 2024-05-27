import React, { useState } from "react";
import "./navBar.scss";
import { Link } from "react-router-dom";
import Register from "../../routes/register/Register";
import Login from "../../routes/login/Login";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const user = true;

  const toggleRegister = () => {
    setShowRegister((prev) => !prev);
    if (showLogin) {
      setShowLogin(false);
    }
  };

  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
    if (showRegister) {
      setShowRegister(false);
    }
  };

  const handleRegisterSuccess = () => {
    setShowRegister(false);
    setShowLogin(true);
  };


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
        {user ? (
          <div className="user">
            <img
              src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg"
              alt=""
            />
            <span>Kumara Kumara</span>
            <Link to="/profile" className="profile">
              <div className="notification">6</div>
              <span>Profile</span>
            </Link>
            <button className="logout">
              {/* <span>Logout</span> */}
              Logout
            </button>
          </div>
        ) : (
          <>
            <a href="/" onClick={(e) => { e.preventDefault(); toggleLogin(); }}>SignIn</a>
            <a href="/" className="signup" onClick={(e) => { e.preventDefault(); toggleRegister(); }}>
              Sign Up
            </a>
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
          <a href="/">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
      <Register show={showRegister} onClose={toggleRegister} onSuccess={handleRegisterSuccess} toggleLogin={toggleLogin} />
      <Login show={showLogin} onClose={toggleLogin} toggleRegister={toggleRegister} />
    </nav>
  );
}

export default NavBar;
