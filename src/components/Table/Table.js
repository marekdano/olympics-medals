import React from "react";
import PropTypes from "prop-types";

const Table = ({ rows }) => (
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
