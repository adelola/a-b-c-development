import { useState } from "react";

export const useChallengeHooks = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (letterObj) => {
    setInputs(inputs => ({
      ...inputs,
      [letterObj.letter]: letterObj.status 
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};