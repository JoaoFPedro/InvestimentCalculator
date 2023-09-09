import React from "react";
import logo from "../../assets/investment-calculator-logo.png";
import Container from "./style";

function Header() {
  return (
    <Container>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </Container>
  );
}

export default Header;
