import React from "react";

class Header extends React.Component {
    constructor(props) {    
        super(props); 
        this.state= {   
          completed: props.completed,
          total: props.total,
        };
      }
        
    render() {

      return (
        <div className="Header">
            <h1>Hello ! </h1>
            <p>Task progression : {this.props.completed()} / {this.state.total}</p>
        </div>
      );
    }
  }


  export default Header;
