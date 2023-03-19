import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./style.css";
import motivation from "./data";

const Motivation = () => {
  const [quote, setQuote] = useState(motivation);
  const [single, setSingle] = useState();
  const changeQuote = () => {
    console.log("hi");
    console.log(quote);
    console.log(quote.length);
    const randomElement = quote[Math.floor(Math.random() * quote.length)];
    console.log(randomElement);
    setSingle(randomElement["q"]);
  };
  useEffect(() => {
    setSingle(quote[0]["q"]);
  }, []);
  return (
    <div className='total-page'>
      <Navbar />
      <div className='all-cards'>
        <div className='single-card'>
          <div className='content'>
            <p>{single}</p>
          </div>
          <br />
          <br />
          <button
            className='btn card-btn'
            style={{ fontSize: "1rem" }}
            onClick={changeQuote}
          >
            Next
          </button>
          <div className='single-card-content'>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
