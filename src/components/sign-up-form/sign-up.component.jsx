import { async } from "@firebase/util";
import React, { useState, useEffect, Fragment } from "react";
import {
  createAuthWithEmailAndPassword,
  createuserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({ inputFields }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }
    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);
      console.log(user);
      await createuserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("EMAIL ALREADY IN USE!");
      } else console.log(error);
    }
  };

  const valueCoder = (input) => {
    if (input.name === "displayName") return displayName;
    if (input.name === "email") return email;
    if (input.name === "password") return password;
    if (input.name === "confirmPassword") {
      return confirmPassword;
    } else return;
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with Email & Password</span>
      <FormInput
        props={{
          handleChange,
          handleSubmit,
          valueCoder,
          inputFields,
          buttonName: "SUBMIT",
        }}
      />
    </div>
  );
};

export default SignUpForm;
