import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import axios from "axios";
import apiRequest from "../../lib/apiRequest";

function Login({
  show,
  onClose,
  toggleRegister,
}: {
  show: any;
  onClose: any;
  toggleRegister: any;
}) {
  if (!show) return null;
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      // console.log(res);
localStorage.setItem("user",JSON.stringify(res.data));
navigate("/");
      // onSuccess();
    } catch (err: any) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="login">
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <h1>Welcome back</h1>
              <input name="username" type="text" placeholder="Username" />
              <input name="password" type="password" placeholder="Password" />
              <button disabled={isLoading}>Login</button>
              {error && <span>{error}</span>}

              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  toggleRegister();
                }}
              >
                Don't you have an account?
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
