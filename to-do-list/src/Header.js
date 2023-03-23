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

      //Couleur du text de progression
      let color="";
      if(this.props.Tasks.length !== 0){
        if(count === this.props.Tasks.length){
          color = 'lightgreen';
        }
        else{
          color = 'white';

        }
      }

      return (
        <div className="Header">
            <h1>Hello Doer! </h1>
            <p className={color}>Task progression : {count} / {this.props.Tasks.length}</p>
        </div>
      );
    }
  }


  export default Header;
