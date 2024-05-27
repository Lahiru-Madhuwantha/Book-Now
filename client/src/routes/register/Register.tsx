import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import apiRequest from "../../lib/apiRequest";

function Register({
  show,
  onClose,
  toggleLogin,
  onSuccess
}: {
  show: any;
  onClose: any;
  toggleLogin: any;
  onSuccess: any;
}) {
  if (!show) return null;
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      onSuccess();
    } catch (err: any) {
      setError(err.response.data.message);
    }
    finally{
      setIsLoading(false);
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="register">
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <h1>Create an Account</h1>
              <input name="username" type="text" placeholder="Username" />
              <input name="email" type="text" placeholder="Email" />
              <input name="password" type="password" placeholder="Password" />

              <button disabled={isLoading}>Register</button>
              {error && <span>{error}</span>}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  toggleLogin();
                }}
              >
                Do you have an account?
              </a>
              {/* <Link to="/login">Do you have an account?</Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
