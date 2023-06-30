import React from 'react'

function Task(props) {

  // props.taskList.map((taskValue)=>{
  //   console.log(taskValue);
  //   return <>
  //     <div> {taskValue} </div>
  //   </>
  // })


  return (
    // <div> {props.taskInput} </div>
    props.taskList.map(v => <>
      <div className="task" key="v"> {v} </div>

    </>)
  )
}

export default Task