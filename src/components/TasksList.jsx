import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from '../redux/todosSlice';
import { useState } from 'react';

function TasksList(){

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.tasks);
    const [newTask, setNewtask] = useState('');

    const handleAddTask = () => {
        if(newTask.trim() !== ''){
            dispatch(addTask(newTask));
            setNewtask('')
        }
    }

    const deleteTask = (id) => {
        dispatch(removeTask(id))
    }

    return(
        <>
            <input type="text" value={newTask} onChange={(e) => setNewtask(e.target.value)} />
            <button onClick={handleAddTask}> Añadir</button>
            <ul>
                { todos.map( todo => (
                    <>
                        <li key={todo.id} >{todo.text} 
                             <button onClick={() => deleteTask(todo.id)}> Eliminar</button>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}


export default TasksList;