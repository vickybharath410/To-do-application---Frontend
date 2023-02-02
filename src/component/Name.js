import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landingpage/task.css";
function Name() {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="name">
      <header>{localStorage.getItem("name")}</header>
      <button className="logout" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}

export default Name;
