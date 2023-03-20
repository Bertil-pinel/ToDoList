import React, { useState } from "react";
import Task from "./Task";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";


const App = () =>{

    const [Tasks, setTasks] = useState([
        {"date": "10/12/1203","content": "Ma premiere tache", "isChecked" : false},
        {"date": "10/12/1203","content": "Vaisselle", "isChecked" : false},
        {"date" : "10/12/1203","content": "devoirs", "isChecked" : true},
        {"date" : "10/12/1203","content": "GAMING","isChecked" : true}       
    ]);


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
        console.log(index);
        let newTasks = Tasks.slice();
        newTasks[index].isChecked = !newTasks[index].isChecked;

        setTasks(newTasks);
    }

    const onClickBinHandler = (e) =>{
        let temp = this.state.tasks.slice();
        temp.splice(e, 1);
        this.setState({
          tasks : temp,
        })
    }

    const addTask = (taskToAdd) => {
        this.setState({
          tasks : this.props.Tasks.concat([{        
                taskToAdd  
          }]),
        }); 
        console.log(this.state.tasks);
    }

    const renderTask = (i) => {
        return (
            <Task 
              key={i}
              date={Tasks[i].date}
              content={Tasks[i].content}
              isChecked={Tasks[i].isChecked}
              ID={i}
              binHandler={() => this.onClickBinHandler(i)}
              onClickCheckHandler={() => this.props.onClickCheckHandler()}
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
                

            
            <Footer/>
                
        </div>
    )
    
  }
  export default App;