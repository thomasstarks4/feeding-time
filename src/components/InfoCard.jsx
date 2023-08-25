import React from "react";

function InfoCard(props) {
  return (
    <div
      className="card align-items-center"
      style={{ width: "30rem", backgroundColor: "#cfe8ff" }}
    >
      <h5 className="card-title text-center mt-2">{props.title}</h5>
      <img src={props.image} className="info-card-image" alt="..." />
      <div className="card-body  justify-content-center">
        <div>
          {" "}
          <p className="card-text">{props.text}</p>
        </div>
        <div class="justify-content-center d-flex">
          <button
            onClick={props.buttonFunc}
            type="button"
            className="btn btn-sm btn-primary push-right"
          >
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
