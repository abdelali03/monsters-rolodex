import React from "react";
import "./Cardlist.style.css";
import { Card } from "../Card/card.component.jsx";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
