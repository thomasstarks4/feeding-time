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
      <div class="pcc text-center">
        <h1 className="">Login</h1>
        <Link to="/signup" className="">
          New to FeedingTime?
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
                  <label className="fs-5" for="username">
                    Username{" "}
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
                    type="password"
                    className="form-control"
                    id="password1"
                    name="password"
                    placeholder="Please enter a password."
                  />
                </div>
                <div className="d-flex pcc">
                  <button
                    className="btn btn-primary mt-3 w-50"
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
