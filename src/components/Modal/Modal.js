import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ athletes: list, active, close }) => {
  const athletes = [
    ...list.filter(a => a.medal === "Gold"),
    ...list.filter(a => a.medal === "Silver"),
    ...list.filter(a => a.medal === "Bronze")
  ];
  const modalStyle = `modal ${active ? "is-active" : ""}`;
  const medalStyle = medalType => {
    let style = "medal-icon";
    if (medalType === "Gold") {
      style += " medal-icon__gold";
    } else if (medalType === "Silver") {
      style += " medal-icon__silver";
    } else if (medalType === "Bronze") {
      style += " medal-icon__bronze";
    }
    return style;
  };
  return (
    <div className={modalStyle}>
      <div className="modal-bg" />
      <div className="modal-content">
        <div className="box">
          <table>
            <thead>
              <tr>
                <th>Athlete</th>
                <th>Discipline</th>
                <th>Medal</th>
              </tr>
            </thead>
            <tbody>
              {athletes &&
                athletes.map((person, index) => {
                  return (
                    <tr key={index}>
                      <td>{person.athlete}</td>
                      <td>
                        {person.sex} {person.event}
                      </td>
                      <td>
                        <div className={medalStyle(person.medal)} />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <button className="modal-close" aria-label="close" onClick={close} />
    </div>
  );
};

Modal.propTypes = {
  athletes: PropTypes.arrayOf(
    PropTypes.shape({
      athlete: PropTypes.string.isRequired,
      sex: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired,
      medal: PropTypes.string.isRequired
    })
  ),
  active: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default Modal;
