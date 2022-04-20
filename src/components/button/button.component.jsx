import React from "react";
import "..//button/button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export const Button = ({ props }) => {
  return (
    <button
      type={props.type}
      className={`button-container ${props.buttonType}`}
    >
      {props.name}
    </button>
  );
};
