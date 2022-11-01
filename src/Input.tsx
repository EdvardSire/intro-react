import React from 'react'

const Input = (props: any) => {
    console.log()
    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.setTaskList([...props.taskList, props.taskName])
    };
    return(
        <form onSubmit={handleSubmit}>
            <input className="input" value={props.taskName} onChange={(event) => props.setTaskName(event.target.value)}/>
            <button className='button bg-blue-500 text-white px-2 rounded'>New</button>
        </form>
    );
};

export default Input;