import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import signUpSchema from "../schemas/signUpSchema";
import { Link } from "react-router-dom";
function SignUp() {
  const [signUpFormData] = useState({
    username: "",
    displayName: "",
    password: "",
    passwordConfirm: "",
    childcareStatus: 0,
    visitSource: 0,
  });

  const onSignUpSubmit = (values, formik) => {
    const payload = {
      username: values.username,
      displayName: values.displayName,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
      childcareStatus: values.childcareStatus,
      visitSource: values.visitSource,
    };
    console.log("INITIAL VALUES HERE --------", signUpFormData);
    console.log("PAYLOAD HERE--------", payload, formik);
  };

  return (
    <React.Fragment>
      <div className="pcc text-center">
        <h1 className="">Sign Up</h1>
        <Link to="/login" className="">
          Already have an account?
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Formik
              enableReinitialize={false}
              initialValues={signUpFormData}
              validationSchema={signUpSchema}
            >
              <Form className="p-2 m-2 form">
                <div className="form-group p-1">
                  <label className="fs-5" for="displayName">
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
                  <label className="fs-5" for="username">
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
                  <label className="fs-5" for="password">
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
                  <label className="fs-5" for="passwordConfirm">
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
                  <label className="fs-5" for="childcareStatus">
                    Are you a childcare worker/babysitter?
                  </label>
                  <Field
                    className="form-control"
                    id="childcareStatus1"
                    name="childcareStatus"
                    as="select"
                  >
                    <option value={0}>Please select an option</option>
                    <option value={1}>Yes</option>
                    <option value={2}>No</option>
                    <option value={3}>Prefer not to answer</option>
                  </Field>
                </div>
                <div className="form-group">
                  <label className="fs-5 p-1" for="visitSource">
                    Where did you hear about us from?
                  </label>
                  <Field
                    className="form-control"
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
                    type="button"
                    onClick={onSignUpSubmit}
                  >
                    Start Feeding!
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
