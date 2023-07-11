import React, { useState } from "react";
import styled from "@emotion/styled";
import chevronDownIcon from "../../assets/bxs-chevron-down.svg";
import chevronUpIcon from "../../assets/bxs-chevron-up.svg";
import { Header } from "./components/Header";
import { ControllerContents } from "./components/ControllerContents";

interface ControllerProps {
  volumeControl: number;
  setVolumeControl(value: number): void;
}

export function Controller({
  volumeControl,
  setVolumeControl,
}: ControllerProps) {
  const [controllerOpen, toggleController] = useState(true);

  return (
    <Container>
      <ScrollContainer>
        <Header />
        {controllerOpen && (
          <ControllerContents
            volumeControl={volumeControl}
            setVolumeControl={setVolumeControl}
          />
        )}
      </ScrollContainer>
      <ToggleController
        isControllerOpen={controllerOpen}
        onClick={() => toggleController(!controllerOpen)}
      />
    </Container>
  );
}

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 280px;
  margin: 12px 0 12px 12px;
  padding: 30px 20px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: -1px -1px 47px -21px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;
  z-index: 2;
`;

const ScrollContainer = styled.div`
  max-height: 320px;
  overflow-x: hidden;
`;

const ToggleController = styled.button<{ isControllerOpen: boolean }>`
  width: 100%;
  height: 24px;
  margin-top: 12px;
  background: transparent
    url(${({ isControllerOpen }) =>
      isControllerOpen ? chevronUpIcon : chevronDownIcon})
    center / 20px no-repeat;
  border: none;
  transition: all 0.2s;
  cursor: pointer;
`;
