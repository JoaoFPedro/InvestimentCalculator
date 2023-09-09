import React from "react";
import Container from "./Style";

function Buttons() {
  return (
    <Container>
      <p className="actions">
        <button type="reset" className="buttonAlt">
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
