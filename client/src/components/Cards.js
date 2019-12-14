import React from "react";
import Toggle from "./Toggle";
import "./Cards.css";

const Cards = (props) => {
    console.log(props)

    return(
      <div className="cards">
        <h3>{props.player.name}</h3>
        <p>Country: {props.player.country}</p>
        <p>Number of searches: {}</p>
        <Toggle />
      </div>
    );
}

export default Cards;