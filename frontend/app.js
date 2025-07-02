const API_URL = "http://localhost:8000/tasks/";

document.addEventListener("DOMContentLoaded", () => {
  fetchTasks();

  document.getElementById("task-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const done = document.getElementById("status").value === "true";
    if (!title || !description) return alert("Title and description required.");
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, done })
    });
    e.target.reset();
    fetchTasks();
  });
});

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  const list = document.getElementById("task-list");
  list.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task" + (task.done ? " done" : "");
    li.innerHTML = `
      <span>
        <strong>${task.title}</strong>: ${task.description}
        <em>(${task.done ? "Done" : "Pending"})</em>
      </span>
      <span class="actions">
        <button onclick="toggleStatus(${task.id}, ${task.done})">${task.done ? "Mark Pending" : "Mark Done"}</button>
        <button onclick="editTask(${task.id}, '${task.title.replace(/'/g, "&#39;")}', '${task.description.replace(/'/g, "&#39;")}', ${task.done})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </span>
    `;
    list.appendChild(li);
  });
}

async function deleteTask(id) {
  await fetch(API_URL + id, { method: "DELETE" });
  fetchTasks();
}

async function toggleStatus(id, done) {
  await fetch(API_URL + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: !done })
  });
  fetchTasks();
}

function editTask(id, title, description, done) {
  const newTitle = prompt("Edit title:", title);
  const newDescription = prompt("Edit description:", description);
  if (newTitle && newDescription) {
    fetch(API_URL + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, description: newDescription, done })
    }).then(fetchTasks);
  }
}
