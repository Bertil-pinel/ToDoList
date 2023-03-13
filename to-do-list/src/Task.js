import React from "react";

let ID=0;
  
function newID(){
    ID++;
    return ID;
}

class Task extends React.Component {

    constructor(props) {    
      super(props); 
      this.state= {   
        date: props.date,
        content: props.content,
        isImportant: props.isImportant,
        isChecked : false,
        id: newID(),
        };
    }
  
      
    render() {

      return (
        <li>
            <div className="task">
                <input type="checkbox"></input>
                <p className="date">{this.state.date}</p>
                <p className="content">{this.state.content}</p>
                <button >supprimer</button>     
            </div>
        </li>
      );
    }
  }


  export default Task;