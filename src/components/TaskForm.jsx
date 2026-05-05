import { useState } from "react";
import { createTask } from "../api/tasks";

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createTask({
      title,
      description,
      status: "Pendiente",
    });

    setTitle("");
    setDescription("");

    onTaskCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Crear tarea</button>
    </form>
  );
}