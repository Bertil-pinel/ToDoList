import React from "react";
import Task from "./Task";


class ListOfTask extends React.Component {

    constructor(props) {    
      super(props); 
      this.state= {
        tasks: props.tasks,
        numberOfTasks: props.tasks.length,
      };
    }
  
    addTask(taskToAdd){
      this.setState({
        tasks : this.tasks.concat([{        
              taskToAdd  
        }]),
        numberOfTasks : this.numberOfTasks++,
      }); 
    }

    renderTask(i){
        return (
            <Task 
              key={i}
              date={this.state.tasks[i].date}
              content={this.state.tasks[i].content}
              isChecked={this.state.tasks[i].isChecked}
              ID={i}
            />
        );
            
        
    }
      
    render() {
        const Tasks = [];
        for(let i = 0 ; i < this.state.numberOfTasks; i++)
          Tasks.push(this.renderTask(i));
      
  
      return (
        <div className="tasks">
                <ul>
                {Tasks}
               </ul>
        </div>
      );
    }
  }
  

  export default ListOfTask;
  