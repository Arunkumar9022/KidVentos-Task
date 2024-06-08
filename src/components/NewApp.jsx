import React, { useState } from "react";
const NewApp = () => {
  const [taskinput, setTaskInput] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    if (taskinput.trim()) {
      const isTaskExit = tasks.some((task) => task.text === taskinput.trim());

      if (isTaskExit) {
        alert("Task already exists");
        return;
      }
      const newTask = {
        id: Date.now(),
        text: taskinput,
        date: new Date().toLocaleDateString(),
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-SetColor min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="containr my-5">
        <div
          className="card p-3 mb-4"
          style={{
            boxShadow: "5 5px 8px 12px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ddd",
          }}
        >
          <h1 className="text-center mb-4">To Do List</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a New Task"
              value={taskinput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <button
              className="btn btn-warning px-5 py-2"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
          <div>
            <ul className="list-group">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{task.text}</strong>
                    <br />
                    <small className="text-muted">Added on{task.date}</small>
                  </div>
                  <button
                    className="btn btn-danger px-5 py-2 rounded-2"
                    onClick={(id) => handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewApp;
