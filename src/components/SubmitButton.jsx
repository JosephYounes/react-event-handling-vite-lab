import React from "react";

/**
 * SubmitButton Component
 * ------------------------
 * Renders a <button> with the text "Submit Password".
 * Logs to console when the mouse enters or leaves the button.
 *
 * Connected to: App.jsx (used alongside PasswordInput).
 */
function SubmitButton() {
  const handleEnter = () => {
    console.log("Mouse Entering");
  };

  const handleLeave = () => {
    console.log("Mouse Exiting");
  };

  return (
    <button
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  );
}

export default SubmitButton;