import React from "react";
import "..//form-input/form-input.scss";
import { Button } from "../button/button.component";

export const FormInput = ({ props }) => {
  const {
    handleChange,
    handleSubmit,
    inputFields,
    valueCoder,
    handleSignIn,
    buttonName,
  } = props;
  const handlerDecider = () => {
    if (handleSubmit) return handleSubmit;
    if (handleChange) return handleSignIn;
  };
  return (
    <div className="group">
      <form onSubmit={handlerDecider()}>
        {inputFields.map((input) => {
          return (
            <div key={input.key}>
              <label>{input.label}</label>
              <input
                className="form-input"
                required
                onChange={handleChange}
                type={input.type}
                name={input.name}
                value={valueCoder(input)}
              />
            </div>
          );
        })}
        <Button props={{ name: buttonName, type: "submit", buttonType: "" }} />
      </form>
    </div>
  );
};
