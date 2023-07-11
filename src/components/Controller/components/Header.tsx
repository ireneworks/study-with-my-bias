import React from "react";
import styled from "@emotion/styled";
import Clock from "react-live-clock";

export function Header() {
  return (
    <HeaderWrapper>
      <h1>Biased!</h1>
      <Clock
        className="clock-wrapper"
        format="hh:mm:ss A"
        ticking={true}
        timezone="Asia/Seoul"
      />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 32px;

  h1 {
    margin: 0;
    font-size: 32px;
    font-weight: 900;
    color: #111111;
    letter-spacing: -0.7px;
  }

  .clock-wrapper {
    display: inline-block;
    color: #555555;
    font-size: 16px;
    font-weight: 600;
  }
`;
