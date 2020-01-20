import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import uuid from 'uuid';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo, getTodos } from '../actions/actions';

const Todos = () => {
    const todos = useSelector(state => state.todosReducer);

    const dispatch = useDispatch();

    const [todo1, setTodo1] = useState('');

    useEffect(() => {
        // Get request to retrieve all data and save to state
        async function fetchData() {
            let res = await axios.get('/api/todos');
            res = res.data.todos.map(todo => todo.todo)
            console.log(res)
            dispatch(getTodos(res));
        }
        fetchData();

    }, [])

    const onChange = e => {
        setTodo1(e.target.value);
    };

    const onSubmit = async e => {
        e.preventDefault();

        dispatch(addTodo(todo1));
        
        // save to database
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post('/api/todos', { todo: todo1 }, config);
            console.log(res)
            console.log(res.data)

        } catch (err) {
            console.error(err.message);
            
        }



        setTodo1('')
    };

    return (
        <div className='todo-container'>

            <h2 style={{ marginBottom: '2rem' }}>Todo List For "Name Here"</h2>

            <form onSubmit={onSubmit}>
                <div className='todo-group' style={{ width: '65%' }}>
                    <input 
                        type="text" 
                        placeholder="todo here.." 
                        onChange={onChange}
                        value={todo1} 
                        />
                </div>

                <div className='todo-group'>
                    <input type="submit" value='enter' className='btn'/>
                </div>

                <div style={{marginTop: '1.4rem'}}>
                    {todos.map(todo => (
                        <TodoItem todo={todo} key={uuid.v4()}/>
                    ))}
                </div>
            </form>
        </div>
    )
}

export default Todos;