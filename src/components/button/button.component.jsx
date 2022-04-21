import React from "react";
import "..//button/button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export const Button = ({ props }) => {
  const { buttonType, type, name, onClickFunc } = props;

  return (
    <button
      onClick={onClickFunc}
      type={type}
      className={`button-container ${buttonType}`}
    >
      {name}
    </button>
  );
};
