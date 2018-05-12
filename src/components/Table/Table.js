import React from "react";
import PropTypes from "prop-types";
import "./Table.css";

const Table = ({ rows }) => (
  <table>
    <thead>
      <tr>
        <th className="cell-align-left">Country</th>
        <th className="gold-icon">Gold</th>
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
              <td className="cell-align-left">{row.country}</td>
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

Table.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string.isRequired,
      athletes: PropTypes.arrayOf(
        PropTypes.shape({
          athlete: PropTypes.string.isRequired,
          country: PropTypes.string.isRequired,
          sex: PropTypes.string.isRequired,
          event: PropTypes.string.isRequired,
          medal: PropTypes.string.isRequired
        })
      ),
      totalGold: PropTypes.number.isRequired,
      totalSilver: PropTypes.number.isRequired,
      totalBronze: PropTypes.number.isRequired
    })
  )
};

export default Table;
