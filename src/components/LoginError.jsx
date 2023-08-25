import { Link } from "react-router-dom";
import unhappyBaby from "../images/nihal-karkala-M5aSbOXeDyo-unsplash.jpg";
function LoginError() {
  return (
    <div className="container">
      <h1 className="text-center">Oh no!</h1>
      <p className="text-center">
        The content you're trying to access requires you to be logged in. Please
        click <Link to="/login">here</Link> to log in. Otherwise, please click{" "}
        <Link to="/signup">here </Link> to sign up!
      </p>
      <div class="d-flex">
        <img
          className="d-flex"
          src={unhappyBaby}
          alt="Unhappy Baby"
          style={{
            width: "60rem",
            height: "60rem",
            justifyContent: "center",
            alignContent: "center",
          }}
        />
      </div>
    </div>
  );
}

export default LoginError;
