import React from "react";
import "./style.css";

function FriendCard(props){
  
    return (
      <div className={`card  ${props.wrong?"wiggle":""}`} >
        <div className="img-container">
          <img 
            alt={props.name} 
            src={props.image} 
            className="toonImage"
            id={props.id}
            onClick={props.click}
            />
        </div>
      </div>
    );
}

export default FriendCard;
