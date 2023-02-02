import React from "react";
import TaskPage from "./TaskPage";
import Name from "../Name";
import "./task.css";
import History from "./History";
function MainPage() {
  return (
    <div>
      <Name />
      <div id="btmview">
        <History />
        <TaskPage />
      </div>
    </div>
  );
}

export default MainPage;