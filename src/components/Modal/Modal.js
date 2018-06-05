import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ athletes, active, close }) => {
  const modalStyle = `modal ${active ? "is-active" : ""}`;
  return (
    <div className={modalStyle}>
      <div className="modal-bg"> </div>
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
                      <td>{person.medal}</td>
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
