import React from "react";
import {
  signInWithGooglePopup,
  createUserProfileDocument,
  createuserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { Button } from "../button/button.component";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
  };

  return (
    <div>
      <Button
        props={{
          type: "submit",
          buttonType: "google-sign-in",
          name: "SIGN IN WITH GOOGLE",
          onClickFunc: logGoogleUser,
        }}
      />
    </div>
  );
};
