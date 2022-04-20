import {
  signInWithGooglePopup,
  createUserProfileDocument,
} from "../../utils/firebase/firebase.utils";
import { createuserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up.component";

const inputs = [
  {
    label: "Display Name",
    name: "displayName",
    type: "text",
    key: 1,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    key: 2,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    key: 3,
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    key: 4,
  },
];

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createuserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm inputFields={inputs} />
    </div>
  );
};

export default SignIn;
