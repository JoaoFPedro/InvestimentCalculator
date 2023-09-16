import React from "react";
import Container from "./Style";

function Buttons({ setUserInput, initialUserInput }) {
  const resetHandler = () => {
    setUserInput(initialUserInput);
  };
  return (
    <Container>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </Container>
  );
}

export default Buttons;
