import React, { useState } from "react";

const defaultFormFields = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const MySignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    return setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <form>
        <label>User Name</label>
        <input
          onChange={handleChange}
          required
          type="text"
          name="userName"
          value={userName}
        />
        <label>Email</label>
        <input
          onChange={handleChange}
          required
          type="email"
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          onChange={handleChange}
          required
          type="password"
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          onChange={handleChange}
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
        />
      </form>
    </div>
  );
};
