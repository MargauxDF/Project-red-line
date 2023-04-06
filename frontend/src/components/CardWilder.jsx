import React from "react";
import PropTypes from "prop-types";
import "./CardWilder.css";

function CardWilder({
  // eslint-disable-next-line react/prop-types
  wilder: { profilPicture, firstname, lastname, campus },
}) {
  return (
    <div className="wilder-card">
      <div className="wilder-card-header">
        <img src={profilPicture} alt={firstname} />
      </div>
      <div className="wilder-card-body">
        <div className="wilder-card-body-title">
          {" "}
          <h2>
            {firstname} {lastname}
          </h2>{" "}
        </div>
      </div>
      <div className="wilder-card-body-text">
        <h3>{campus}</h3>
      </div>
    </div>
  );
}

CardWilder.propTypes = {
  profilPicture: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  campus: PropTypes.string.isRequired,
};

export default CardWilder;
