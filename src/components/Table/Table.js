import React from "react";
import PropTypes from "prop-types";
import "./Table.css";

const Table = ({ rows, handleRowClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="cell-align-left">Rank</th>
          <th className="cell-align-left">Country</th>
          <th>
            <span className="medal-icon medal-icon__gold" />
          </th>
          <th>
            <span className="medal-icon medal-icon__silver" />
          </th>
          <th>
            <span className="medal-icon medal-icon__bronze" />
          </th>
          <th>Total</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map(row => {
            return (
              <tr key={row.country}>
                <td className="cell-align-left">{row.rank}</td>
                <td>
                  <div className="cell cell-align-left">
                    <img src={row.flag} alt="country flag" />
                    <span>{row.name}</span>
                  </div>
                </td>
                <td>{row.totalGold}</td>
                <td>{row.totalSilver}</td>
                <td>{row.totalBronze}</td>
                <td>{row.athletes.length}</td>
                <td onClick={() => handleRowClick(row)}>
                  <span className="icon__plus" />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      flag: PropTypes.string.isRequired,
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
      totalBronze: PropTypes.number.isRequired,
      rank: PropTypes.number.isRequired
    })
  ),
  handleRowClick: PropTypes.func.isRequired
};

export default Table;
