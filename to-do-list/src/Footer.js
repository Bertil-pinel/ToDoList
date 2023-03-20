import React from "react";

class Footer extends React.Component {
            
    render() {

      return (
        <div className="Footer">
            <button onClick={this.props.addTask}><img src="/plus.png" alt="plus" height="20"/></button>
            <input type="text" placeholder="Filtrer..."></input>
        </div>
      );
    }
  }


  export default Footer;