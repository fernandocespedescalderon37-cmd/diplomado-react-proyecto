const API_URL = "https://taskdone-node.onrender.com/api/tasks";

// GET (listar tareas)
export const getTasks = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

// POST (crear tarea)
export const createTask = async (task) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return await res.json();
};

// PUT (editar tarea)
export const updateTask = async (id, task) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return await res.json();
};

// PATCH (cambiar estado)
export const toggleTask = async (id, status) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return await res.json();
};

// DELETE
export const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};