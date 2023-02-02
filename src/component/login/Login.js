import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [userdetails, setUserdetails] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://to-do-application-backend.vercel.app/api/user/login", {
        email: userdetails.email,
        password: userdetails.password,
      })
      .then((res) => {
        alert(res.data.status);
        localStorage.clear();
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("id", res.data.id);
        navigate("/task");
      })
      .catch((e) => alert(e.response.data.status));
  }
  return (
    <div>
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        <h1 id="memberloginlogo">Member Login</h1>
        <input
          className="loginitems"
          type="text"
          placeholder="     email"
          value={userdetails.email}
          onChange={(e) =>
            setUserdetails({ ...userdetails, email: e.target.value })
          }
        />
        <input
          className="loginitems"
          placeholder="     password"
          type="password"
          value={userdetails.password}
          onChange={(e) =>
            setUserdetails({ ...userdetails, password: e.target.value })
          }
        />

        <button className="loginitems" type="submit">
          submit
        </button>
        <span className="red loginitems">Forget Password ?</span>
      </form>
      <div className="registerlink">
        <span className="registerspan">
          <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
