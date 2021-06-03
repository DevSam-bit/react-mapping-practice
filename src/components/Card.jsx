import React from "react";
import Avatar from "./Avatar";
import Section from "./Section";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Section sectionInfo={props.tel} />
        <Section sectionInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
