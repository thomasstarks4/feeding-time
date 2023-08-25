import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import signUpSchema from "../schemas/signUpSchema";
import { Link } from "react-router-dom";
import addUser from "../services/userService";
import InfoCard from "./InfoCard";
import infoCardPhoto1 from "../images/jonathan-borba-Z39a7lqZusU-unsplash.jpg";
import infoCardPhoto2 from "../images/nihal-karkala-M5aSbOXeDyo-unsplash.jpg";
import infoCardPhoto3 from "../images/rainier-ridao-TCYj_UxoIUY-unsplash.jpg";
import { toast, ToastContainer } from "react-toastify";
function SignUp() {
  const [signUpStatus, setSignUpStatus] = useState({
    status: false,
    step: 1,
    infoStep: 0,
  });

  const cards = [
    {
      image: infoCardPhoto1,
      title: "Hello and welcome!",
      text: "Let's begin your journey with us. There are a couple of different options for an account with us.",
      buttonText: ">",
      buttonFunc: () => {
        setSignUpStatus((prevStatus) => ({
          ...prevStatus,
          infoStep: prevStatus.infoStep + 1,
        }));
      },
    },
    {
      image: infoCardPhoto2,
      title: "Card 2",
      text: "This is the second card.",
      buttonText: ">",
      buttonFunc: () => {
        setSignUpStatus((prevStatus) => ({
          ...prevStatus,
          infoStep: prevStatus.infoStep + 1,
        }));
      },
    },
    {
      image: infoCardPhoto3,
      title: "Card 3",
      text: "This is the third card.",
      buttonText: "Restart",
      buttonFunc: () => {
        setSignUpStatus((prevStatus) => ({
          ...prevStatus,
          infoStep: prevStatus.infoStep - 2,
        }));
      },
    },
  ];
  //setting initial value object for Formik
  const signUpFormData = {
    displayName: "",
    username: "",
    password: "",
    passwordConfirm: "",
    childCareWorkerStatus: 0,
    visitSource: 0,
  };

  //changes the step of the sign up process. must be provided a direction ex: changeStep(1);
  const changeStep = (direction) => {
    if (direction === 1 && signUpStatus.step >= 2) {
      setSignUpStatus((prevStatus) => ({
        ...prevStatus,
        step: prevStatus.step - 1,
      }));
    }
    if (direction === 2 && signUpStatus.step <= 2) {
      setSignUpStatus((prevStatus) => ({
        ...prevStatus,
        step: prevStatus.step + 1,
      }));
    }
  };

  const onSignUpSubmit = async (values) => {
    const payload = {
      username: values.username,
      displayName: values.displayName,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
      childCareWorkerStatus: values.childCareWorkerStatus,
      visitSource: values.visitSource,
    };
    try {
      const data = await addUser(payload);
      if (data.isSuccessful === true) {
        setSignUpStatus(true);
      }
    } catch (error) {
      toast.error(
        "Oops! Something went wrong! Try refreshing the page and trying again. Error: " +
          error.message.toString()
      );
    }
  };

  return (
    <React.Fragment>
      {signUpStatus.step === 1 && (
        <div className="pcc text-center">
          <h2 className="ft-header-gold">Before setting up your account </h2>{" "}
          <br />
          <aside>
            <Link to="/login" className="">
              Already have an account?
            </Link>
          </aside>
          <div className="container"></div>
        </div>
      )}
      {signUpStatus.step === 1 && (
        <div className="info-card-holder d-flex pt-5">
          <InfoCard
            image={cards[signUpStatus.infoStep].image}
            title={cards[signUpStatus.infoStep].title}
            text={cards[signUpStatus.infoStep].text}
            buttonText={cards[signUpStatus.infoStep].buttonText}
            buttonFunc={cards[signUpStatus.infoStep].buttonFunc}
          />
        </div>
      )}
      {signUpStatus.step === 2 && (
        <div className="pcc text-center">
          <h1 className="ft-header-gold">Sign Up</h1> <br />
          <aside>
            <Link to="/login" className="">
              Already have an account?
            </Link>
          </aside>
        </div>
      )}
      <div className="container">
        {signUpStatus.step === 2 && (
          <div className="row">
            <div className="col-md-6 mx-auto">
              <Formik
                enableReinitialize={false}
                initialValues={signUpFormData}
                validationSchema={signUpSchema}
                onSubmit={onSignUpSubmit}
              >
                <Form className="p-2 m-2 form">
                  <div className="form-group p-1">
                    <label className="fs-5 form-label" for="displayName">
                      Display Name
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="displayName1"
                      placeholder="This is what we'll call you."
                      name="displayName"
                    />
                  </div>
                  <div className="form-group p-1">
                    <label className="fs-5 form-label" for="username">
                      Username
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="username1"
                      name="username"
                      placeholder="Ex: johnsmith123"
                    />
                  </div>
                  <div className="form-group p-1">
                    <label className="fs-5 form-label" for="password">
                      Password
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="password1"
                      name="password"
                      placeholder="Please enter a password."
                    />
                  </div>
                  <div className="form-group p-1">
                    <label className="fs-5 form-label" for="passwordConfirm">
                      Password Confirmation
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="password1"
                      name="passwordConfirm"
                      placeholder="Please confirm your password."
                    />
                  </div>
                  <div className="form-group">
                    <label
                      className="fs-5 form-label"
                      for="childCareWorkerStatus"
                    >
                      Are you a childcare worker/babysitter?
                    </label>
                    <Field
                      className="form-control"
                      id="childCareWorkerStatus1"
                      name="childCareWorkerStatus"
                      as="select"
                    >
                      <option value={0}>Please select an option</option>
                      <option value={1}>Yes</option>
                      <option value={2}>No</option>
                      <option value={3}>Prefer not to answer</option>
                    </Field>
                  </div>
                  <div className="form-group">
                    <label className="fs-5 p-1 form-label" for="visitSource">
                      Where did you hear about us from?
                    </label>
                    <Field
                      className="form-control "
                      id="visitSource1"
                      name="visitSource"
                      as="select"
                    >
                      <option value={0}>Please select an option</option>
                      <option value={1}>Internet Search</option>
                      <option value={2}>LinkedIn</option>
                      <option value={3}>Referral</option>
                      <option value={4}>Somewhere Else</option>
                    </Field>
                  </div>

                  <div className="d-flex pcc">
                    <button
                      className="btn btn-primary mx-auto mt-3 w-50"
                      type="submit"
                    >
                      Start Feeding!
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        )}
        <div>
          {signUpStatus.step > 1 && (
            <button
              type="button"
              className="btn btn-success push-left mt-5"
              onClick={() => changeStep(1)}
            >
              &larr; Previous
            </button>
          )}
          {signUpStatus.step < 3 && (
            <button
              type="button"
              className="btn btn-success push-right mt-5"
              onClick={() => changeStep(2)}
            >
              &rarr; Next
            </button>
          )}
        </div>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
}

export default SignUp;
