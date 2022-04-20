import React from "react";
import "..//form-input/form-input.scss";
import { Button } from "../button/button.component";

export const FormInput = ({ props }) => {
  const { handleChange, handleSubmit, inputFields, valueCoder } = props;
  return (
    <div className="group">
      <form onSubmit={handleSubmit}>
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
                onChange={handleChange}
              />
            </div>
          );
        })}
        <Button props={{ name: "Submit", type: "submit", buttonType: "" }} />
      </form>
    </div>
  );
};
