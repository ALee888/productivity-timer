import React, { useState } from 'react';
import TaskTimer from './TaskTimer';
import './App.css';

function App () {
    // States
    const [timers, setTimers] = useState([]);
    const [inputName, setInputName] = useState('');

    const createTaskTimer = () => {
        if (inputName) {
            const newTimer = <TaskTimer />;
            const newObj = {id: 1, name: inputName, timer: newTimer}
            setTimers((prevTimers) => [...prevTimers, newObj]);
            setInputName(() => '');
        }

    };

    const deleteTaskTimer = (taskId) => {
        // Delete taskTimer at the given taskId
        const newTimers = [...timers];
        newTimers.splice(taskId, 1);
        setTimers(() => newTimers);
    };

    return (
        <div className='app'>
            <h1>Time on Task:</h1>
            <div className='inputs'>
                <input 
                    type='text' 
                    placeholder='Task Name' 
                    value = {inputName}
                    onChange={(e) => setInputName(e.target.value)} 
                />
                <button onClick={() => createTaskTimer("t0t")}>Create Task</button>
            </div>
            <div className='timers'>
                {timers.map((value, index) => (
                    <div className='task' key={index}>
                        <p>{value.name}</p>
                        <div>{value.timer}</div>
                        <button onClick={() => deleteTaskTimer(index)}>Quit</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;