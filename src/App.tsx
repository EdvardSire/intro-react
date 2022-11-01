import React, { useState } from 'react';

// Components
import Header from './Header';
import Input from './Input';

const App = () => {
  const [taskName, setTaskName] = useState('Create a task!');
  const [taskList, setTaskList] = useState([]);

  const removeTask = (i: number) => {
    setTaskList(taskList.filter((item) => item !== taskList[i]))
  };


  return (
    <div className="App">
      <div>
        <Header name="To do list"/>
      </div>

      <div>
        <Input taskName={taskName} setTaskName={setTaskName} taskList={taskList} setTaskList={setTaskList}/>
      </div>

      <div>
        {taskList.map((item, i) => {
          return(
            <div key={i}>
              {item}
              <button className='button bg-blue-500 text-white px-2 rounded mx-10' onClick={() => {removeTask(i)}}>Done</button>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default App;

