import React from "react";
import numeral from "numeral";

export const CovidTable = ({ countries }) => {
  return (
    <div className="covid-table">
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};
