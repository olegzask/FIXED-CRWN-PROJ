import { async } from "@firebase/util";
import React, { useState } from "react";
import { FormInput } from "../form-input/form-input.component";
import { GoogleAuthProvider } from "firebase/auth";
import {
  signInWithGooglePopup,
  createuserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { SignIn } from "../sign-in-google/sign-in-google.component";
import "..//sign-in-form/sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = ({ inputFields }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/wrong-password") alert("Wrong Password");
      if (error.code === "auth/user-not-found") {
        alert("User Not Found!");
        setFormFields(defaultFormFields);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const valueCoder = (input) => {
    if (input.name === "email") return email;
    if (input.name === "password") {
      return password;
    } else return;
  };

  return (
    <div className="sign-up-container sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with email & password</span>
      <FormInput
        props={{
          handleChange,
          valueCoder,
          inputFields,
          handleSignIn,
          buttonName: "SIGN IN",
        }}
      />
      <div className="google-sign">
        <SignIn />
      </div>
    </div>
  );
};
