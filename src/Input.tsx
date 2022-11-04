import React, { Dispatch } from 'react'

type InputType = {
    taskName: string,
    setTaskName: Dispatch<React.SetStateAction<string>>,
    taskList: string[],
    setTaskList: Dispatch<React.SetStateAction<string[]>>
};

const Input = ({taskName, setTaskName, taskList, setTaskList}: InputType) => {
    console.log()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTaskList([...taskList, taskName])
    };
    return(
        <form onSubmit={handleSubmit}>
            <input className="input" value={taskName} onChange={(event) => setTaskName(event.target.value)}/>
            <button className='button bg-blue-500 text-white px-2 rounded'>New</button>
        </form>
    );
};

export default Input;