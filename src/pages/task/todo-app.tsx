import { useState, ChangeEvent } from "react";

interface Task {
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  // Handler for adding a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { text: newTask.trim(), completed: false },
      ]);
      setNewTask(""); // Clear input field
    }
  };

  // Toggle task completion
  const handleToggleComplete = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const handleDelete = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  // Update input state
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl mb-4">To-Do List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          className="p-2 border rounded-md w-full"
          placeholder="New Task"
        />
        <button
          onClick={handleAddTask}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Task
        </button>
      </div>

      <ul>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks available.</p>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 border-b ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
              <div>
                <button
                  onClick={() => handleToggleComplete(index)}
                  className={`px-2 py-1 rounded-md ${
                    task.completed ? "bg-green-500 text-white" : "bg-gray-300"
                  }`}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoApp;
