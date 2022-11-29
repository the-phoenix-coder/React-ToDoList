import React, { useState } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";

export default function App()
{
    const savedArray = JSON.parse(localStorage.tasks)
    const [tasks, setTasks] = useState(savedArray)

    function newTask(id, task)
    {
        setTasks([...tasks, {id: id, nameOfTask: task}])
    }

    function handleDelete(id)
    {
        setTasks(tasks.filter(task => task.id != id))
    }


    window.localStorage.setItem('tasks', JSON.stringify(tasks))

    return (
        <div className="ToDoList">
            <h1>To Do List With Local Storage Using React JS</h1>
            <Header tasking={newTask} />
            <Content tasks={tasks} handleDelete={handleDelete} />
        </div>
    )
}