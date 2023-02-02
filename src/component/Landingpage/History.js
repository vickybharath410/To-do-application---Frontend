import React, { useState, useEffect } from "react";
import axios from "axios";
function History() {
  const id = localStorage.getItem("id");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://to-do-application-backend.vercel.app/api/task/alltask/${id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div id="history">
      {console.log(data)}
      <h1>History</h1>
      <div>
        {data
          .filter((detail) => detail.status === "Completed")
          .map((details) => {
            return (
              <div className="history">
                <span className="activity">{details.activity}</span>
                <span className="totaltime">{details.totalTime}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default History;