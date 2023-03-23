import React, { useState } from "react";
import Task from "./Task";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";


const App = () =>{
    
        if(localStorage.getItem('Tasks') == null){
            console.log('caca');
            localStorage.setItem('Tasks' ,JSON.stringify([
                {"date": "10/12/2023","content": "Ma premiere tache", "isChecked" : false},
                {"date": "10/12/2023","content": "Vaisselle", "isChecked" : false},
                {"date" : "10/12/2023","content": "devoirs", "isChecked" : true},
                {"date" : "10/12/1203","content": "GAMING","isChecked" : true}]))
        }
    
        const [Tasks, setTasks] = useState(JSON.parse(localStorage.getItem('Tasks')));

    const [tasksFilter, setTasksFilter] = useState("");

    const TasksDisplay = Tasks.filter(element => element.content.toUpperCase().includes(tasksFilter));

    localStorage.setItem('Tasks',JSON.stringify(Tasks));

    const tasksModified = () =>{
        localStorage.setItem('Tasks',JSON.stringify(Tasks));
    }

    const renderTask = (i) => {
        return (
            <Task 
              key={i}
              date={TasksDisplay[i].date}
              content={TasksDisplay[i].content}
              isChecked={TasksDisplay[i].isChecked}
              ID={i}
              Tasks={Tasks}
              setTasks={setTasks}
              tasksModified={tasksModified}
            />
        );
    }

    return(
        <div className="App">
            <Header
                Tasks={Tasks}
            />

            <div className="tasks">
                <ul>
                    {TasksDisplay.length !== 0?TasksDisplay.map((item, index) => renderTask(index)):"Il n'y a aucune tâche correspondante."}
               </ul>
            </div>
                

            
            <Footer
                Tasks={Tasks}
                setTasks={setTasks}
                tasksModified={tasksModified}
                setTasksFilter={setTasksFilter}
            />
                
        </div>
    )
    
  }
  export default App;