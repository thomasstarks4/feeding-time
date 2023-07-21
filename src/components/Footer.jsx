import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="light-bg footer">
      <div className="card-header">
        {" "}
        {new Date().getFullYear()} FeedingTime.{" "}
      </div>
      <div className="card-body">
        <h5 className="card-title">FeedingTime</h5>
        <p className="card-text">Having a problem somewhere?</p>
        <Link to="/help" className="btn btn-primary">
          Get help here
        </Link>
      </div>
    </div>
  );
}

export default Footer;
