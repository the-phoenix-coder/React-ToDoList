import React from 'react'
import './Content.css'

export default function Contact(props)
{
    return (
        <div className='content'>
            {
                props.tasks.map(task =>
                    <div className='task' id={task.id} key={task.id} onClick={(e) => props.handleDelete(e.target.parentNode.id)}>
                        {task.nameOfTask}
                        <span className='delete'>
                            Delete
                        </span>
                    </div>)
            }
        </div>
    )
}