import React, { useState } from "react";
import Task from "./Task";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";


const App = () =>{

    const [Tasks, setTasks] = useState(JSON.parse(localStorage.getItem('Tasks'))
        /*[
        {"date": "10/12/1203","content": "Ma premiere tache", "isChecked" : false},
        {"date": "10/12/1203","content": "Vaisselle", "isChecked" : false},
        {"date" : "10/12/1203","content": "devoirs", "isChecked" : true},
        {"date" : "10/12/1203","content": "GAMING","isChecked" : true}       
    ]*/
    );

    localStorage.setItem('Tasks',JSON.stringify(Tasks));

    const tasksModified = () =>{
        localStorage.setItem('Tasks',JSON.stringify(Tasks));
    }


    const taskCount = () => {
        let checked = 0;
        for(let i=0 ; i < Tasks.length ; i++){
            if(Tasks[i].isChecked){
                checked++;
            }
        }
        return checked;
    }

    const onClickCheckHandler = (index) =>{
        let newTasks = Tasks.slice();
        newTasks[index].isChecked = !newTasks[index].isChecked;
        setTasks(newTasks);
        tasksModified();
    }

    const onClickBinHandler = (e) =>{
        let temp = Tasks.slice();
        temp.splice(e, 1);
        setTasks(temp);
        tasksModified();
    }

    const addTask = () => {
        let taskToAdd="";
        while(taskToAdd === ""){
            taskToAdd = prompt("Quel est l'intitulé de la tâche à ajouter ?");
        }
        if (taskToAdd === null || taskToAdd === "") {
            return;
        }
        let temp = Tasks.slice();

        var date = new Date();
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        date = mm + '/' + dd + '/' + yyyy;

        taskToAdd = {"date": date,"content": taskToAdd, "isChecked" : false};
        temp.push(taskToAdd);
        setTasks(temp);
        tasksModified();
    }

    const renderTask = (i) => {
        return (
            <Task 
              key={i}
              date={Tasks[i].date}
              content={Tasks[i].content}
              isChecked={Tasks[i].isChecked}
              ID={i}
              binHandler={() => onClickBinHandler(i)}
              onClickCheckHandler={() => onClickCheckHandler(i)}
            />
        );
    }

    return(
        <div className="App">
            <Header
                completed= {() => taskCount()}
                total= {Tasks.length} 
            />

            <div className="tasks">
                <ul>
                    {Tasks.map((item, index) => renderTask(index))}
               </ul>
            </div>
                

            
            <Footer
                addTask={() => addTask()}
            />
                
        </div>
    )
    
  }
  export default App;