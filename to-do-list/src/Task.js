import React from "react";


class Task extends React.Component {
      
    render() {
      let checked =  <input type="checkbox"  onChange={this.props.onClickCheckHandler} checked={this.props.isChecked}></input>; 
     
      return (
        <li>
            <div id={this.props.id} className="task">
                {checked}
                <p className="date">{this.props.date}</p>
                <p className="content">{this.props.content}</p>
                <button onClick={this.props.binHandler}><img src="/bin.png" alt="poubelle" height="20"/></button>     
            </div>
        </li>
      );
    }
  }


  export default Task;