import React from "react";
import { Card } from "react-bootstrap";

export const InfoBox = ({ title, cases, isRed, active, total, ...props }) => {
  return (
    <Card
      onClick={props.onClick}
      className={`covid-infoBox ${active && "covid-infoBox--selected"} ${isRed && "covid-infoBox--red"}`}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="covid-cases">{cases}</Card.Text>
        <Card.Text className="covid-total">{total}</Card.Text>
      </Card.Body>
    </Card>
  );
};
