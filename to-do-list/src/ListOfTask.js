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
            date={this.props.tasks[i].date}
            content={this.props.tasks[i].content}
            />
        );
            
        
    }
      
    render() {
        const Tasks = () => {
            for(let i = 0 ; i < this.props.tasks.length; i++)
                this.renderTask(i);
        }
  
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
  