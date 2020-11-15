import React from "react";
import "../styles/Time.css";
function Time() {
  return (
    <div className="time">
      <div className="time-info-container">
        <div className="time-greeting-container">
          <img src="/icon-sun.svg" alt="" />
          <h4 className="time-greeting-h4">Good morining, it's currently</h4>
        </div>
        <div className="time-current-time-container">
          <h2 className="time-current-time-h2">11:37</h2>
          <h3 className="time-current-time-h3">BST</h3>
        </div>

        <h3 className="time-info-h3">In London, uk</h3>
      </div>
      <div className="time-more-container">
        <p>More</p>
        <input type="image" src="/icon-arrow-up.svg" />
      </div>
    </div>
  );
}

export default Time;
