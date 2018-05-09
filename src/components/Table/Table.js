import React from "react";

const table = ({ rows }) => (
  <table>
    <thead>
      <tr>
        <th>Country</th>
        <th>Gold</th>
        <th>Silver</th>
        <th>Bronze</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {rows &&
        rows.map(row => {
          return (
            <tr key={row.country}>
              <td>{row.country}</td>
              <td>{row.totalGold}</td>
              <td>{row.totalSilver}</td>
              <td>{row.totalBronze}</td>
              <td>{row.athletes.length}</td>
            </tr>
          );
        })}
    </tbody>
  </table>
);

// TODO: add PropsType

export default table;
