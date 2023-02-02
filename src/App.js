import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddTask from "./component/Landingpage/AddTask";
import TaskPage from "./component/Landingpage/TaskPage";
import Login from "./component/login/Login";
import Register from "./component/login/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/task" element={<TaskPage />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </div>
  );
}

export default App;
