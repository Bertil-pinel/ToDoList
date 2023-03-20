import React from "react";


class Task extends React.Component {

    constructor(props) {    
      super(props); 
      this.state= {   
        date: props.date,
        content: props.content,
        isChecked : props.isChecked,
        id: props.ID,
        };
    }
      
    render() {
      let checked = this.state.isChecked ? <div className="frame check" onClick={this.props.onClickCheckHandler(this.state.id)}></div> : <div className="frame" onClick={this.props.onClickCheckHandler()} ></div>; 
     
      return (
        <li>
            <div id={this.state.id} className="task">
                {checked}
                <p className="date">{this.state.date}</p>
                <p className="content">{this.state.content}</p>
                <button onClick={this.props.binHandler}><img src="/bin.png" alt="poubelle" height="20"/></button>     
            </div>
        </li>
      );
    }
  }


  export default Task;