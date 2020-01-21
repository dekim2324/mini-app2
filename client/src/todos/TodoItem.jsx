import React from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { deleteTodo } from '../actions/actions';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleDelete = async e => {
        dispatch(deleteTodo(todo));

        try {
            await axios.delete('/api/todos', {
                data: { todo }
            })    
        } catch (err) {
            console.error(err.message)
        }
        
    }

    return (
        <div className='todo-item'>
            <span onClick={handleDelete}>X</span> {todo}
        </div>
    )
}

export default TodoItem;