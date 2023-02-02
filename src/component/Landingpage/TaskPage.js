import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Name from "../Name";

function TaskPage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true);
  const id = localStorage.getItem("id");
  console.log(`https://to-do-application-backend.vercel.app/api/task/start/${id}`);
  function handleStart(datas) {
    console.log(datas);
    let activityid = datas._id;
    axios
      .put(`https://to-do-application-backend.vercel.app/api/task/start/${activityid}`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    setFlag(!flag);
  }
  function handleEnd(datas) {
    console.log(datas);

    let activityid = datas._id;
    axios
      .put(`https://to-do-application-backend.vercel.app/api/task/end/${activityid}`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    setFlag(!flag);
  }
  useEffect(() => {
    axios
      .get(`https://to-do-application-backend.vercel.app/api/task/alltask/${id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [flag]);
  return (
    <div>
      <Name />
      <div className="addtask">
        <button className="addbtn" onClick={() => navigate("/add")}>
          Add Task
        </button>
      </div>
      <table className="tables">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Status</th>
            <th>Time taken</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datas) => {
            console.log(datas);
            return (
              <tr>
                <td>{datas.activity}</td>
                <td>{datas.status}</td>
                {datas.totalTime ? <td>{datas.totalTime}</td> : <td></td>}
                {datas.status === "Completed" ? (
                  <td></td>
                ) : datas.status === "Ongoing" ? (
                  <td onClick={() => handleEnd(datas)}>End</td>
                ) : (
                  <td onClick={() => handleStart(datas)}>Start</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskPage;
