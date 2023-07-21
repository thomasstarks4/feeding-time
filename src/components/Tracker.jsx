import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Tracker() {
  // State object for feeding data.
  const [trackerData, setTrackerData] = useState({
    calsPerScoop: null,
    scoops: null,
    ouncesFed: null,
    isFormula: true,
    calculationResult: null,
  });

  const onFormulaFeeding = () => {
    setTrackerData((prevState) => {
      return {
        ...prevState,
        isFormula: true,
        calsPerScoop: null,
        ouncesFed: null,
        scoops: null,
      };
    });
    console.log("Formula feeding mode!");
  };

  const onBMilkFeeding = () => {
    setTrackerData((prevState) => {
      return {
        ...prevState,
        isFormula: false,
        calsPerScoop: 19.75,
        ouncesFed: null,
      };
    });
    console.log("BMilk feeding mode!");
  };

  // Calculates calories for both Formula and Breastmilk feedings.
  const calculateCalories = (data) => {
    // Check if any input field is empty or contains NaN
    if (
      data.isFormula &&
      (isNaN(data.calsPerScoop) ||
        isNaN(data.scoops) ||
        isNaN(data.ouncesFed) ||
        data.ouncesFed === null ||
        data.ouncesFed === "")
    ) {
      toast.error("Please fill out all fields correctly.");
      return;
    } else if (
      !data.isFormula &&
      (data.ouncesFed === null || data.ouncesFed === "")
    ) {
      toast.error("Please fill out all fields correctly.");
      return;
    }

    let result = 0;

    if (data.isFormula === true) {
      // Formula feeding: Calculates potential calories based on scoops and calories per scoop
      const potentialCalories =
        parseFloat(data.calsPerScoop) * parseFloat(data.scoops);
      result = potentialCalories * (parseFloat(data.ouncesFed) / 8); // Adjusts calories based on how much of the bottle was consumed (assuming 8 ounces per bottle)
    } else {
      // Breastmilk feeding: Calculates calories based on the ounces fed using 19.75 as the calories per ounce
      const ouncesFed = data.ouncesFed === "" ? 0 : parseFloat(data.ouncesFed);
      result = ouncesFed * 19.75;
    }
    if (isNaN(result) === true) {
      toast.error("Please fill out all fields correctly.");
      return;
    }
    // Set the calculated result into the state
    setTrackerData((prevState) => ({
      ...prevState,
      calculationResult: result,
    }));

    console.log(result);
  };

  return (
    <React.Fragment>
      <div className="pcc text-center">
        <h1 className="">FeedingTime Tracker (Beta)</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form className="p-2 m-2 form">
              <div className="form-group p-1">
                <label className="fs-5" htmlFor="isFormula">
                  Baby Formula feeding?
                </label>
                <div>
                  <button
                    className="btn btn-primary mx-1"
                    type="button"
                    onClick={onFormulaFeeding}
                  >
                    Yes
                  </button>
                  <button
                    className="btn btn-primary mx-1"
                    type="button"
                    onClick={onBMilkFeeding}
                  >
                    No
                  </button>
                </div>
              </div>
              {trackerData.isFormula && (
                <div>
                  <div className="form-group p-1">
                    <label className="fs-5" htmlFor="calsPerScoop">
                      How many calories per serving?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="calsPerScoop1"
                      name="calsPerScoop"
                      placeholder="Ex: Regular Enfamil is 44 calories per serving."
                      value={trackerData.calsPerScoop || ""}
                      onChange={(e) =>
                        setTrackerData((prevState) => ({
                          ...prevState,
                          calsPerScoop: parseFloat(e.target.value),
                        }))
                      }
                    />
                  </div>
                  <div className="form-group p-1">
                    <label className="fs-5" htmlFor="scoops">
                      How many scoops this feeding?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="scoops1"
                      name="scoops"
                      placeholder="Ex: 4"
                      value={trackerData.scoops || ""}
                      onChange={(e) =>
                        setTrackerData((prevState) => ({
                          ...prevState,
                          scoops: parseFloat(e.target.value),
                        }))
                      }
                    />
                  </div>
                </div>
              )}
              <div className="form-group p-1">
                <label className="fs-5" htmlFor="ouncesFed">
                  How many ounces did they eat?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ouncesFed1"
                  name="ouncesFed1"
                  placeholder="Ex: 5"
                  value={trackerData.ouncesFed || ""}
                  onChange={(e) =>
                    setTrackerData((prevState) => ({
                      ...prevState,
                      ouncesFed: parseFloat(e.target.value),
                    }))
                  }
                />
              </div>
              <div className="d-flex pcc">
                <button
                  className="btn btn-primary mx-auto mt-3 w-50"
                  type="button"
                  onClick={() => calculateCalories(trackerData)}
                >
                  Calculate Calories!
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container text-center">
          {trackerData.calculationResult !== null && (
            <div>{trackerData.calculationResult} Calories this feeding!</div>
          )}
        </div>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
}

export default Tracker;
