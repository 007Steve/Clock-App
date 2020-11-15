import React from "react";
import "../styles/DateInfo.css";
function DateInfo() {
  return (
    <div className="dateInfo">
      <div className="dateInfo-container">
        <div className="dateInfo-info-container">
          <p>Current Timezone</p>
          <h2>Europe</h2>
        </div>
        <div className="dateInfo-info-container">
          <p>Day of the year</p>
          <h2>295</h2>
        </div>
      </div>

      <div className="dateInfo-container">
        <div className="dateInfo-info-container">
          <p>day of the week</p>
          <h2>5</h2>
        </div>
        <div className="dateInfo-info-container">
          <p>week number</p>
          <h2>42</h2>
        </div>
      </div>
    </div>
  );
}

export default DateInfo;
