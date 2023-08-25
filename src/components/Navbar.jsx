import React from "react";
import { Link } from "react-router-dom";
import feedingTimeLogo from "../images/newlogo3.png";

function Navbar() {
  return (
    <nav className="navbar no-wrap navbar-expand light-bg justify-content-between">
      <Link className="linkTwo navbar-brand p-1" to="/">
        <img
          className="linkTwo navbar-img"
          src={feedingTimeLogo}
          alt="Feeding Time Logo"
        />
      </Link>

      <div className="navbar-nav">
        <Link className="linkTwo nav-link mx-4" to="/">
          <p className="fs-5">Home</p>
        </Link>
        <Link className="linkTwo nav-link mx-4" to="/login">
          <p className="fs-5">Login</p>
        </Link>
        {/*Must be rerouted to /profile once login and auth are finished in .NET */}
        <Link className="linkTwo nav-link mx-4" to="/loginerror">
          <p className="fs-5 no-wrap">My Profile</p>
        </Link>
        <Link className="linkTwo nav-link mx-4" to="/blogs">
          <p className="fs-5">Baby Talk</p>
        </Link>
        <Link className="linkTwo nav-link mx-4" to="/about">
          <p className="fs-5">About Us</p>
        </Link>
        <Link className="linkTwo nav-link mx-4" to="/contact">
          <p className="fs-5">Contact</p>
        </Link>
        <Link className="linkTwo nav-link mx-4" to="/tracker">
          <p className="fs-5 no-wrap">FeedingTime Tracker</p>
        </Link>
      </div>

      <form className="form-inline">
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </nav>
  );
}

export default Navbar;
