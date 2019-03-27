import React from "react";
import "./style.css";

class FriendCard extends React.Component{
  
  render(){
    return (
      <div className="card" >
        <div className="img-container">
          <img 
            alt={this.props.name} 
            src={this.props.image} 
            className="toonImage"
            id={this.props.id}
            onClick={this.props.click}
            />
        </div>
      </div>
    );
  }
  
}

export default FriendCard;
