import SignUpForm from "../../components/sign-up-form/sign-up.component";
import { SignInForm } from "../../components/sign-in-form/sign-in-form.component";
import "..//authentication/auth.styles.scss";

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

export const Authentication = () => {
  return (
    <div className="authentication-container">
      <div>
        <SignInForm inputFields={[inputs[1], inputs[2]]} />
      </div>

      <div>
        <SignUpForm inputFields={inputs} />
      </div>
    </div>
  );
};
