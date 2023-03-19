import React from "react";
import Navbar from "./Navbar";
import "./style.css";
const Explore = () => {
  return (
    <>
      <div className='total-page'>
        <Navbar />
        <div className='explore-full'>
          <div className='explore-sub'>
            <div className='main-explore'>
              <h3>Explore</h3>
              <div className='line'></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum ea eos adipisci. Perferendis fugiat culpa ipsum nesciunt
                explicabo, tenetur accusantium magnam beatae praesentium,
                minima, quas architecto. Quam blanditiis aliquid placeat!
              </p>
            </div>
            <div className='btn-container'>
              <button className='btn motivation'>Motivation</button>
              <button className='btn jokes'>Jokes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
