import React from "react";
import "./index.css"

function Card(props) {
  return (
    <div className="Card-1">
      <img src="/images/main-bg-d.png" alt="" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
