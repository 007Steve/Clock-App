import React, { useEffect, useState } from "react";
import "../styles/Quotes.css";
function Quotes() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchQuotes();
  }, []);

  async function fetchQuotes() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setData(data);
  }
  return (
    <div className="quotes">
      <div className="quotes-info-container">
        <p className="quotes-p">{`"${data.content}"`} </p>
        <img
          className="quotes-refresh"
          src="/icon-refresh.svg"
          alt=""
          onClick={fetchQuotes}
        />
      </div>
      <h4 className="quotes-author">{data.author}</h4>
    </div>
  );
}

export default Quotes;
