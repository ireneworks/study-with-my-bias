import React from "react";
import styled from "@emotion/styled";

export function Header() {
  return (
    <HeaderWrapper>
      <h1>Biased!</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  h1 {
    margin: 0;
    font-size: 32px;
    font-weight: 900;
    color: #111111;
    letter-spacing: -0.7px;
  }
`;
