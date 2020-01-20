import React from 'react'

const TodoItem = ({ todo }) => {
    return (
        <div className='todo-item'>
            <span>X</span> {todo}
        </div>
    )
}

export default TodoItem;