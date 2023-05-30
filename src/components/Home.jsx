import feedingTimeGif from "../images/animatedlogo2.gif";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div className="d-flex flex-column align-items-center">
        <div className="d-block">
          <img
            className="pt-3 pb-3"
            src={feedingTimeGif}
            alt="Feeding Time Animation"
          />
        </div>
        <div className="d-block text-center">
          <h3>New to FeedingTime?</h3>
          <Link to="/about" className="btn btn-success">
            Get Started
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
