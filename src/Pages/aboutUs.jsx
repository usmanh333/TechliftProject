import {React, useState} from 'react'

const AboutUs = ()=>{
  return(
    <div>
      <h1>About Us</h1>
    </div>
  )
}

export default AboutUs






// const AboutUs=()=>{
// // Declare Variables here
//   const [toDoList, setToDoList] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   // Performing actions Here
//   const deleteTask = (id) =>{
//     const newToDoList = toDoList.filter((task=>{
//       return task.id!==id;
//       // if (task===taskName){
//       //   return false
//       // }else{
//       //   return true
//       // }
//     })) 
//     setToDoList(newToDoList);

//   };
  
  
//     return (
//       <div className="App">
//         <div className='addTask'>
//           <input onChange={(event)=>{
//             setNewTask(event.target.value);
//           }}/>

//           <button className='btn btn-primary' onClick={()=>{
//             const task={
//               id:toDoList.length===0 ? 1 : toDoList[toDoList.length-1].id + 1,
//               taskName:newTask,
//             }
//             setToDoList([...toDoList, task]);
//           }}>Add Task</button>

  
//         </div>
        
//         <div className='list'>
//           {toDoList.map((task)=>{
//             return <div>

//               <h3>{task.taskName}</h3>

//               <button className="btn btn-danger" onClick={()=>deleteTask(task.id)}>X</button>
              
//               </div>
//           })}
//         </div>
  
//       </div>
      
      
//     );
  

//   }