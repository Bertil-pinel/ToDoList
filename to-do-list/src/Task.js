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

    onChangeHandler(e){
      console.log('click');
    }
  
      
    render() {
      let checked = this.state.isChecked ? <div class="checked"></div> : <div class="unchecked"></div>; 
     
      return (
        <li>
            <div id={this.state.id} className="task">
                {checked}
                <p className="date">{this.state.date}</p>
                <p className="content">{this.state.content}</p>
                <button ><img src="/bin.png" height="20"/></button>     
            </div>
        </li>
      );
    }
  }


  export default Task;