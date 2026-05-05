import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>Gestión de Tareas</h1>

      <TaskForm onTaskCreated={() => setRefresh(!refresh)} />

      <TaskList key={refresh} />
    </div>
  );
}