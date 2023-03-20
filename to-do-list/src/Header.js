import React from "react";

class Header extends React.Component {
       
    render() {

      return (
        <div className="Header">
            <h1>Hello ! </h1>
            <p>Task progression : {this.props.completed()} / {this.props.total}</p>
        </div>
      );
    }
  }


  export default Header;
