import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'

function Register({ show, onClose }: { show: any, onClose: any }) {
  if(!show) return null;
  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <button className="close-button" onClick={onClose}>X</button>
      <div className="register">
        <div className="formContainer">
          <form>
            <h1>Create an Account</h1>
            <input name="username" type="text" placeholder="Username" />
            <input name="email" type="text" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            
            <button>Register</button>
            <Link to="/login">Do you have an account?</Link>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register