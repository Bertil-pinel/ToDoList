import React from "react";

class Header extends React.Component {

    taskCount(){
      let count = 0;
      for(let i=0 ; i < this.props.Tasks.length ; i++){
          if(this.props.Tasks[i].isChecked){
              count++;
          }
      }
      return count;
    }
       
    render() {
      let count = this.taskCount();
      return (
        <div className="Header">
            <h1>Hello Doer! </h1>
            <p>Task progression : {count} / {this.props.Tasks.length}</p>
        </div>
      );
    }
  }


  export default Header;
