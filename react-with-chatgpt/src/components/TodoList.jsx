import React from 'react'
import {useState} from 'react';

function TodoList() {

    const [todos, setTodos] = useState([
    { id: 1, task: "Learn React basics" },
    { id: 2, task: "Practice useState & props" },
  ]);

  const [newTask, setNewTask] = useState("")


   const addTodo = () => {
    if(newTask.trim() === "") return;

    const newTodo = {
      id: Date.now(), // unique key based on timestamp
      task: newTask,
    };
    setTodos([...todos, newTodo]);
    setNewTask("")
  };
  return (
    <div className='mt-[30px]'>
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">

        <h2 className="text-xl font-bold mb-3 text-center">📝 Todo List</h2>

      {/* Step 3: Render the list */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-3 bg-white rounded-md shadow-sm border border-gray-200"
          >
            {todo.task}
          </li>
        ))}
      </ul>

      {/* Step 4: Add button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-1 p-2 border rounded-md mt-[10px]"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

    </div>
    </div>
  )
}

export default TodoList