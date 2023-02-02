import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  let navigate = useNavigate();

  const [userdetails, setUserdetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleSubmit(e) {
    const { email, password } = userdetails;

    e.preventDefault();
    if (userdetails.password !== userdetails.confirmPassword) {
      alert("Password and confirm password must be same");
    } else {
      axios
        .post("https://to-do-application-backend.vercel.app/api/user/signup", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);

          alert("Successfully signed up");
          navigate("/");
        })
        .catch((e) => alert("Email already exist"));
    }
  }
  return (
    <div>
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        <h1>Register</h1>
        <input
          placeholder="     email"
          className="loginitems"
          type="text"
          required
          value={userdetails.email}
          onChange={(e) =>
            setUserdetails({ ...userdetails, email: e.target.value })
          }
        />
        <input
          className="loginitems"
          placeholder="     password"
          type="password"
          required
          value={userdetails.password}
          onChange={(e) =>
            setUserdetails({ ...userdetails, password: e.target.value })
          }
        />
        <input
          className="loginitems"
          placeholder="      confirm password"
          required
          type="password"
          value={userdetails.confirmPassword}
          onChange={(e) =>
            setUserdetails({ ...userdetails, confirmPassword: e.target.value })
          }
        />
        <button className="loginitems" type="submit">
          submit
        </button>
        <span className="red loginitems">Member Login</span>
      </form>
      <div className="registerlink">
        <span className="registerspan">
          <Link to="/">Login</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
