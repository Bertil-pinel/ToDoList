import React from "react";


class Task extends React.Component {


    move(direction){
      if(this.props.ID + direction < 0 || this.props.ID+direction === this.props.Tasks.length ) {
        return;
      }

      let newTasks = this.props.Tasks.slice();

        const buff = newTasks[this.props.ID];
        newTasks[this.props.ID] = newTasks[this.props.ID + direction];
        newTasks[this.props.ID + direction] = buff;
     
      this.props.setTasks(newTasks);
      this.props.tasksModified();
    }

    onClickCheckHandler(index) {
        let newTasks = this.props.Tasks.slice();
        newTasks[index].isChecked = !newTasks[index].isChecked;
        this.props.setTasks(newTasks);
        this.props.tasksModified();
    }

    binHandler(e) {
        let temp = this.props.Tasks.slice();
        temp.splice(e, 1);
        this.props.setTasks(temp);
        this.props.tasksModified();
    }
      
    render() {
      let checked =  <input type="checkbox"  onChange={() => this.onClickCheckHandler (this.props.ID)} checked={this.props.isChecked}></input>; 
     
      return (
        <li>
            <div id={this.props.id} className="task">
                {checked}
                <p className="date">{this.props.date}</p>
                <p className="content">{this.props.content}</p>
                <button onClick={() => this.move(-1)}><ion-icon name="chevron-up-outline"></ion-icon></button>   

                <button onClick={() => this.move(1)}><ion-icon name="chevron-down-outline"></ion-icon></button>  
                <button onClick={() => this.binHandler(this.props.ID)}><ion-icon name="trash-bin-outline"></ion-icon></button> 

            </div>
        </li>
      );
    }
  }


  export default Task;