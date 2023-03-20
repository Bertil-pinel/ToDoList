import React from "react";
import Task from "./Task";


class ListOfTask extends React.Component {

    constructor(props) {    
      super(props); 
      this.state= {
        tasks: props.tasks,
      };
    }
  
    addTask(taskToAdd){
      this.setState({
        tasks : this.props.Tasks.concat([{        
              taskToAdd  
        }]),
      }); 
      console.log(this.state.tasks);
    }



    renderTask(i){
        return (
            <Task 
              key={i}
              date={this.state.tasks[i].date}
              content={this.state.tasks[i].content}
              isChecked={this.state.tasks[i].isChecked}
              ID={i}
              binHandler={() => this.onClickBinHandler(i)}
              onClickCheckHandler={() => this.props.onClickCheckHandler}
            />
        );
    }
      
    render() {
        const Tasks = [];
        for(let i = 0 ; i < this.state.tasks.length; i++)
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
  