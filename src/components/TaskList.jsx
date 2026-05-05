import { useEffect, useState } from "react";
import { getTasks, deleteTask, toggleTask } from "../api/tasks";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleToggle = async (task) => {
    await toggleTask(task.id, task.status === "Pendiente" ? "Finalizada" : "Pendiente");
    loadTasks();
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>

      {tasks.map((task) => (
        <div key={task.id} style={{
          padding: "10px",
          margin: "10px",
          background: task.status === "Finalizada" ? "#b6fcb6" : "#ffd6d6"
        }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Estado: {task.status}</p>

          <button onClick={() => handleToggle(task)}>
            Cambiar estado
          </button>

          <button onClick={() => handleDelete(task.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}