import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AddTask() {
  const [activity, setActivity] = useState("");
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  function handleTask() {
    axios
      .post(`https://to-do-application-backend.vercel.app/api/task/newtask/${id}`, {
        activity: activity,
      })
      .then((res) => {
        alert(res.data.status);
        navigate("/task");
      })
      .catch((e) => console.log(e));
  }
  return (
    <div>
      <input
        placeholder="Enter The task"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={() => handleTask()}>Add</button>
    </div>
  );
}

export default AddTask;
