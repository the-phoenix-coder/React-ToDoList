import React, {useRef, useState} from 'react'
import './Header.css'

export default function Header(props)
{
    const [task, setTask] = useState({
        id: '',
        name: ''
    })
    const input = useRef()

    function handleChange(e)
    {
        const taskName = e.target.value
        setTask({id: Math.random(), name: taskName})
    }
    function handleSubmit(e)
    {
        e.preventDefault()
        props.tasking(task.id, task.name)
        input.current.value = ''
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type Task ToDo" onChange={handleChange} ref={input} />
            <input type="submit" value="ADD" />
        </form>
    )
}