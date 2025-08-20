import React from "react";

/**
 * PasswordInput Component
 * ------------------------
 * Renders an <input> field of type "password".
 * Triggers a console log ("Entering password...") whenever the user types.
 *
 * Connected to: App.jsx (used alongside SubmitButton).
 */
function PasswordInput() {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <input
      type="password"
      onChange={handleChange}
    />
  );
}

export default PasswordInput;