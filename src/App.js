import React, { useState } from 'react';
import TaskTimer from './TaskTimer';
import './App.css';

function App () {
    // States
    const [timers, setTimers] = useState([]);
    const [inputName, setInputName] = useState('');

    const createTaskTimer = () => {
        if (inputName) {
            const newTimer = <TaskTimer key={inputName}/>;
            const newObj = {id: 1, name: inputName, timer: newTimer}
            setTimers((prevTimers) => [...prevTimers, newObj]);
            setInputName(() => '');
        }

    };

    const deleteTaskTimer = (taskId) => {
        // Delete taskTimer at the given taskId
        const newTimers = timers.slice();
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
            <div className='tasks'>
                {timers.map((value, index) => (
                    <div className='task' key={index}>
                        <div className='control'>
                            <h2>{value.name}</h2>
                            <button onClick={() => deleteTaskTimer(index)}>X</button>
                        </div>
                        {value.timer}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App;